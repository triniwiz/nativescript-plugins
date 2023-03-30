# @triniwiz/nativescript-messenger

```javascript
npm install @triniwiz/nativescript-messenger
```

## Usage

### Method

#### send: Sends a message to one or multiple recipients

##### Parameters
* numbers: An array of phone number strings. Supports just one or multiple. *optional*
* message: The body message. *optional*
* subject: The subject message. *optional*
* media: Attachments switches message to mms supports png,jpeg,mp4 *optional*

```ts
import {send, available} from "@triniwiz/nativescript-messenger";
const numbers = ["868-657-1234", "868-630-4321", "868-648-1122"];
send(numbers, "My message", "Subject of Message", [
                    {
						fileName: 'destiny_2.jpg',
						mimeType: 'image/jpg',
						path: '~/assets/destiny_2.jpg',
					}
]);
```

This method also returns a promise. Use as so to define actions after the user has either canceled or sent the message.

```ts
    send(["868-555-5555", "868-555-4444"], "this is body").then(function(args){
        console.log(args.response); 
        // either a string saying cancelled or sent
        console.log(args.message); 
        // just a string with more detail than response.
        
        /* you can do stuff here.. this happens back 
        in your app after the message window has 
        been dismissed */        
        
    }, function (e) {
        console.log("Error occurred " + e); 
        // e will show a vague error message.
    });    
```

## License

Apache License Version 2.0
