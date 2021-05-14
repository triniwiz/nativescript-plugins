import { registerNativeViewElement } from 'svelte-native/dom'

registerNativeViewElement("view", () => require("../").View);
