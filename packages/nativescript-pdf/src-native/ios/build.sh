#!/bin/sh

echo "Set exit on simple errors"
set -e

rm -rf $(PWD)/dist

echo "Build for iphonesimulator"
xcodebuild \
    -project PdfNative.xcodeproj \
    -scheme PdfNative \
    -sdk iphonesimulator \
    -destination "generic/platform=iOS Simulator" \
    -configuration Release \
    -quiet \
    clean build \
    BUILD_DIR=$(PWD)/dist \
    SKIP_INSTALL=NO \
    BUILD_LIBRARY_FOR_DISTRIBUTION=YES 

echo "Build for iphoneos"
xcodebuild \
    -project PdfNative.xcodeproj \
    -scheme PdfNative \
    -sdk iphoneos \
    -destination "generic/platform=iOS" \
    -configuration Release \
    -quiet \
    clean build \
    BUILD_DIR=$(PWD)/dist \
    CODE_SIGN_IDENTITY="" \
    CODE_SIGNING_REQUIRED=NO \
    SKIP_INSTALL=NO \
    BUILD_LIBRARY_FOR_DISTRIBUTION=YES

echo "Creating XCFramework"
xcodebuild \
    -create-xcframework \
    -framework $(PWD)/dist/Release-iphoneos/PdfNative.framework \
    -debug-symbols $(PWD)/dist/Release-iphoneos/PdfNative.framework.dSYM \
    -framework $(PWD)/dist/Release-iphonesimulator/PdfNative.framework \
    -debug-symbols $(PWD)/dist/Release-iphonesimulator/PdfNative.framework.dSYM \
    -output $(PWD)/dist/PdfNative.xcframework