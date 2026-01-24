#!/bin/bash
set -euo pipefail

ARCHS_IOS=(
    x86_64-apple-ios
    aarch64-apple-ios
    aarch64-apple-ios-sim
    x86_64-apple-ios-macabi
    aarch64-apple-ios-macabi
)

CRATE_NAME=ios
build_arch() {
    local arch=$1
    echo "Building for $arch..."
    RUSTFLAGS="-Zlocation-detail=none -C panic=abort -Zfmt-debug=none" \
    cargo +nightly build \
        -Z build-std=std,panic_abort \
        -Z build-std-features=panic_immediate_abort,optimize_for_size \
        --target "$arch" --release -p "$CRATE_NAME"
}

build_all_archs() {
    for arch in "${ARCHS_IOS[@]}"; do
        build_arch "$arch"
    done
}

clean() {
    echo "Cleaning..."
    cargo clean
}

case "${1:-build}" in
    build)
        build_all_archs
        ;;
    clean)
        clean
        ;;
    *)
        echo "Usage: $0 [build|clean]"
        exit 1
        ;;
esac
