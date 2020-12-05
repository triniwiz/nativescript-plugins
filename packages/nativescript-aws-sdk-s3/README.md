# Nativescript AWS SDK S3

### TypeScript

```ts
import { S3 } from '@triniwiz/nativescript-aws-sdk-s3';
S3.init({ endPoint: '', accessKey: '', secretKey: '', type: 'static' }); // <= Try calling this before the app starts
```

```ts
import { S3 } from '@triniwiz/nativescript-aws-sdk-s3';
const s3 = new S3();
const imageUploaderId = s3.createUpload({
  file: '~/assets/hulk_wolverine_x_men.jpg',
  bucketName: 'yaychat',
  key: `ns_${isIOS ? 'ios' : 'android'}_hulk_wolverine_x_men.jpg`,
  acl: 'public-read',
  completed: (error, success) => {
    if (error) {
      console.log(`Download Failed :-> ${error.message}`);
    }
    if (success) {
      console.log(`Download Complete :-> ${success.path}`);
    }
  },
  progress: progress => {
    console.log(`Progress : ${progress.value}`);
  }
});

s3.pause(imageUploaderId);
s3.resume(imageUploaderId);
s3.cancel(imageUploaderId);
```

### JavaScript

```js
const S3 = require('@triniwiz/nativescript-aws-sdk-s3').S3;
S3.S3.init({ endPoint: '', accessKey: '', secretKey: '', type: 'static' }); // <= Try calling this before the app starts
```

```js
const imageUploaderId = s3.createUpload({
  file: '~/assets/hulk_wolverine_x_men.jpg',
  bucketName: 'yaychat',
  key: `ns_${isIOS ? 'ios' : 'android'}_hulk_wolverine_x_men.jpg`,
  acl: 'public-read',
  completed: (error, success) => {
    if (error) {
      console.log(`Download Failed :-> ${error.message}`);
    }
    if (success) {
      console.log(`Download Complete :-> ${success.path}`);
    }
  },
  progress: progress => {
    console.log(`Progress : ${progress.value}`);
  }
});

s3.pause(imageUploaderId);
s3.resume(imageUploaderId);
s3.cancel(imageUploaderId);
```

## Api

### S3

| Method                                   | Default | Type                         | Description                                       |
| ---------------------------------------- | ------- | ---------------------------- |-----------------------------------------------------|
| createDownload(options: S3DownloadOptions) |         | `number`                     | Creates a task it returns the id of the task |
| createUpload(options: S3UploadOptions)    |         | `number`                     | Creates a task it returns the id of the task |
| resume(id: number)                       |         | `void`                       | Resumes a task.                              |
| cancel(id: number)                       |         | `void`                       | Cancels a task.                              |
| pause(id: number)                        |         | `void`                       | Pauses a task.                               |
