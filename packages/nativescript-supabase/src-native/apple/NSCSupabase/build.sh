#!/bin/sh

echo "Set exit on simple errors"
set -e

BUILD_DIR=$(PWD)/build
DIST_DIR=$(PWD)/dist
rm -rf $BUILD_DIR
rm -rf $DIST_DIR

echo "Build for iphonesimulator"
xcodebuild \
    -project NSCSupabase.xcodeproj \
    -scheme NSCSupabase \
    -configuration Release \
    -destination "generic/platform=iOS Simulator" \
    clean build \
    BUILD_DIR=$BUILD_DIR \
    SKIP_INSTALL=NO \
    BUILD_LIBRARY_FOR_DISTRIBUTION=YES \
    -quiet

echo "Build for iphoneos"
xcodebuild \
    -project NSCSupabase.xcodeproj \
    -scheme NSCSupabase \
    -sdk iphoneos \
    -configuration Release \
    -destination "generic/platform=iOS" \
    clean build \
    BUILD_DIR=$BUILD_DIR \
    CODE_SIGN_IDENTITY="" \
    CODE_SIGNING_REQUIRED=NO \
    SKIP_INSTALL=NO \
    BUILD_LIBRARY_FOR_DISTRIBUTION=YES \
    -quiet

echo "Build for Mac Catalyst"
xcodebuild \
    -project NSCSupabase.xcodeproj \
    -scheme NSCSupabase \
    -configuration Release \
    -destination "generic/platform=macOS,variant=Mac Catalyst" \
    clean build \
    BUILD_DIR=$BUILD_DIR \
    CODE_SIGN_IDENTITY="" \
    CODE_SIGNING_REQUIRED=NO \
    SKIP_INSTALL=NO \
    BUILD_LIBRARY_FOR_DISTRIBUTION=YES \
    -quiet

# Only available with Xcode >= 15.2
echo "Build for visionOS Simulator"
xcodebuild \
    -project NSCSupabase.xcodeproj \
    -scheme NSCSupabase \
    -configuration Release \
    -destination "generic/platform=visionOS Simulator" \
    clean build \
    BUILD_DIR=$BUILD_DIR \
    SKIP_INSTALL=NO \
    BUILD_LIBRARY_FOR_DISTRIBUTION=YES \
    -quiet

echo "Build for visionOS"
xcodebuild \
    -project NSCSupabase.xcodeproj \
    -scheme NSCSupabase \
    -configuration Release \
    -destination "generic/platform=visionOS" \
    clean build \
    BUILD_DIR=$BUILD_DIR \
    SKIP_INSTALL=NO \
    BUILD_LIBRARY_FOR_DISTRIBUTION=YES \
    -quiet

echo "Creating XCFramework"
BASE=$BUILD_DIR/Release
xcodebuild \
    -create-xcframework \
    -framework $BASE-iphoneos/NSCSupabase.framework \
    -debug-symbols $BASE-iphoneos/NSCSupabase.framework.dSYM \
    -framework $BASE-iphonesimulator/NSCSupabase.framework \
    -debug-symbols $BASE-iphonesimulator/NSCSupabase.framework.dSYM \
    -framework     $BASE-maccatalyst/NSCSupabase.framework \
    -debug-symbols $BASE-maccatalyst/NSCSupabase.framework.dSYM \
    -framework     $BASE-xrsimulator/NSCSupabase.framework \
    -debug-symbols $BASE-xrsimulator/NSCSupabase.framework.dSYM \
    -framework     $BASE-xros/NSCSupabase.framework \
    -debug-symbols $BASE-xros/NSCSupabase.framework.dSYM \
    -output $DIST_DIR/NSCSupabase.xcframework