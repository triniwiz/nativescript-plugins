import { NativeScriptConfig } from '@nativescript/core';

export default {
  ios: {
    SPMPackages: [
      {
        name: 'KlaviyoSwift',
        libs: ['KlaviyoSwift', 'KlaviyoForms'],
        repositoryURL: 'https://github.com/klaviyo/klaviyo-swift-sdk',
        version: '4.2.0',
      },
    ]
  }
} as NativeScriptConfig;