import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { AppContainer } from './components/AppContainer';
import { registerYogaLayout } from '@triniwiz/nativescript-yogalayout/react';

// In NativeScript, the app.ts file is the entry point to your application. You
// can use this file to perform app-level initialization, but the primary
// purpose of the file is to pass control to the app’s first module.

// Controls react-nativescript log verbosity.
// - true: all logs;
// - false: only error logs.
Object.defineProperty(global, '__DEV__', { value: false });

registerYogaLayout();

ReactNativeScript.start(React.createElement(AppContainer, {}, null));

// Do not place any code after the application has been started as it will not
// be executed on iOS.
