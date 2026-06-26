#!/bin/sh
#
# Re-stamp the bundled pdfium binaries to a lower iOS deployment target. 
#
# Usage: ./patch-pdfium-deployment-target.sh [DEPLOYMENT_TARGET]
#        DEPLOYMENT_TARGET defaults to 13.0

set -e

DEPLOYMENT_TARGET="${1:-13.0}"
HERE="$(cd "$(dirname "$0")" && pwd)"

# Every pdfium.xcframework copy in the package: the one that ships (platforms/ios)
# plus the source copies, so a rebuild does not regress.
XCFRAMEWORKS="
$HERE/../../platforms/ios/pdfium.xcframework
$HERE/pdfium_lib/pdfium.xcframework
$HERE/PdfNative/libs/pdfium.xcframework
"

# Map vtool's platform name to its numeric id (vtool -set-build-version only
# accepts the numeric id for simulator platforms on this toolchain).
platform_id() {
  case "$1" in
    IOS)            echo 2 ;;
    IOSSIMULATOR)   echo 7 ;;
    MACCATALYST)    echo 6 ;;
    *)              echo "" ;;  # unknown -> caller skips
  esac
}

# Re-stamp a single (thin) Mach-O slice in place, preserving its own platform/sdk.
patch_slice() {
  slice="$1"
  # vtool -show-build may emit on stdout or stderr depending on path form; merge both.
  # Match the field name exactly ($1==...) — the file path itself can contain the
  # substring "platform" (e.g. ".../platforms/ios/...") and would false-match a regex.
  info="$(vtool -show-build "$slice" 2>&1)"
  plat="$(echo "$info" | awk '$1=="platform"{print $2; exit}')"
  sdk="$(echo "$info" | awk '$1=="sdk"{print $2; exit}')"
  pid="$(platform_id "$plat")"
  sdk="${sdk:-$DEPLOYMENT_TARGET}"
  [ -n "$pid" ] || { echo "    !! unknown platform '$plat', skipping slice"; return 1; }
  vtool -set-build-version "$pid" "$DEPLOYMENT_TARGET" "$sdk" -replace \
    -output "$slice" "$slice"
}

patch_binary() {
  bin="$1"
  [ -f "$bin" ] || { echo "  skip (missing): $bin"; return; }

  archs="$(lipo -archs "$bin")"
  if [ "$(echo "$archs" | wc -w)" -gt 1 ]; then
    # fat binary: thin each slice, re-stamp per its own platform, recombine
    tmp="$(mktemp -d)"
    slices=""
    for arch in $archs; do
      lipo "$bin" -thin "$arch" -output "$tmp/$arch"
      patch_slice "$tmp/$arch"
      slices="$slices $tmp/$arch"
    done
    lipo $slices -create -output "$bin"
    rm -rf "$tmp"
  else
    patch_slice "$bin"
  fi
  echo "  patched ($archs) -> minos $DEPLOYMENT_TARGET : $bin"
}

for xc in $XCFRAMEWORKS; do
  [ -d "$xc" ] || { echo "skip (missing): $xc"; continue; }
  echo "== $xc"
  # Note: for-loop (not `find | while`) so lipo/vtool inside the body cannot
  # consume the iteration's stdin. Paths here contain no spaces.
  for bin in $(find "$xc" -name pdfium -type f -path "*pdfium.framework/*"); do
    patch_binary "$bin"
  done
  # Keep each framework's Info.plist MinimumOSVersion in sync with the binary.
  for plist in $(find "$xc" -name Info.plist -path "*pdfium.framework/*"); do
    if /usr/libexec/PlistBuddy -c "Print :MinimumOSVersion" "$plist" >/dev/null 2>&1; then
      /usr/libexec/PlistBuddy -c "Set :MinimumOSVersion $DEPLOYMENT_TARGET" "$plist"
      echo "  plist MinimumOSVersion -> $DEPLOYMENT_TARGET : $plist"
    fi
  done
done

echo "Done. Target = iOS $DEPLOYMENT_TARGET"
