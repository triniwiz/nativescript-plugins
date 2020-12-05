import { Observable } from "@nativescript/core";

export function ObservableProperty() {
    return (obj: Observable, key: string) => {
        let storedValue = obj[key];

        Object.defineProperty(obj, key, {
            get: function () {
                return storedValue;
            },
            set: function (value) {
                if (storedValue === value) {
                    return;
                }
                storedValue = value;
                this.notify({
                    eventName: Observable.propertyChangeEvent,
                    propertyName: key,
                    object: this,
                    value,
                });
            },
            enumerable: true,
            configurable: true
        });
    };
}
