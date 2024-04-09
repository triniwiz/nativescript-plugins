# Nativescript nativescript-yogalayout

```javascript
npm install @triniwiz/nativescript-yogalayout
```

## Usage

[Documentation for the latest stable release](https://triniwiz.github.io/nativescript-plugins/api-reference/yogalayout.html)

### In React NativeScript

First, register the component before any of your React NativeScript app renders. A good place to put this code is in your entrypoint file (which may be called `src/app.ts` or similar), before the `ReactNativeScript.start` function is called. Here's how to install it:

```ts
import { registerYogaLayout } from "@triniwiz/nativescript-yogalayout/react";

registerYogaLayout();
```

Example usage

```tsx
import * as React from "react";

export function YogaLayoutExample() {
    return (
        <yoga>
            <yoga backgroundColor="aqua" margin={50} padding={30} borderRadius={10} borderWidth={5} borderColor="purple">
                <yoga backgroundColor="red" padding={2}>
                    <yoga flex={.3} backgroundColor="green">
                        <label alignSelf="center" color="black" text="First"/>
                    </yoga>
                    <yoga flex={.5} backgroundColor="white">
                        <label alignSelf="center" color="black" text="Second"/>
                    </yoga>
                    <yoga backgroundColor="pink">
                        <label alignSelf="center" color="black" text="Third"/>
                    </yoga>
                    <label alignSelf="center" color="blue" text="Something"/>
                </yoga>
                <yoga position="absolute" bottom="10" right="10" width="100" height="100" backgroundColor="yellow" padding="10">
                    <label color="black" text="Absolute"/>
                </yoga>
            </yoga>
        </yoga>
    );
}
```

**Troubleshooting**

If you see an error like this when writing e.g. `<yoga>` into your JSX:

> Property 'yoga' does not exist on type 'JSX.IntrinsicElements'.ts(2339)

Make sure that you have:

1. Installed the `react-nativescript` npm module.
2. Installed the `@types/react` npm module, strictly with the exact version provided in the [React NativeScript starter template](https://github.com/NativeScript/nativescript-app-templates/tree/master/packages/template-blank-react).
3. Run the postinstall script that comes with the React NativeScript template – `npm run postinstall` – to patch `@types/react`.
4. Registered the component as described above (i.e. import and run the `registerYogaLayout()` method).
5. If using Visual Studio Code, option-click the import `@triniwiz/nativescript-yogalayout/react` to jump to the file; opening the file will force it to load its provided typings.


## License

Apache License Version 2.0
