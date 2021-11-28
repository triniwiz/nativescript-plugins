import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'io.github.triniwiz.nativescript.plugindemovue',
  appResourcesPath: '../../tools/assets/App_Resources',
  appPath: 'app',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
	cli: {
		packageManager: 'npm'
	}
} as NativeScriptConfig;
