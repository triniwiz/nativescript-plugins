# Nativescript Downloader

## Installation

`npm install @triniwiz/nativescript-downloader`

## Usage

### TypeScript

```typescript
import { Downloader } from '@triniwiz/nativescript-downloader';
Downloader.setTimeout(120); //Increase timeout default 60s
```

```typescript
import { Downloader, ProgressEventData, DownloadEventData } from 'nativescript-downloader';
const downloader = new Downloader();
const imageDownloaderId = Downloader.createDownload({
  url:
    'https://wallpaperscraft.com/image/hulk_wolverine_x_men_marvel_comics_art_99032_3840x2400.jpg'
});

downloader
  .start(imageDownloaderId, (progressData: ProgressEventData) => {
    console.log(`Progress : ${progressData.value}%`);
    console.log(`Current Size : ${progressData.currentSize}%`);
    console.log(`Total Size : ${progressData.totalSize}%`);
    console.log(`Download Speed in bytes : ${progressData.speed}%`);
  })
  .then((completed: DownloadEventData) => {
    console.log(`Image : ${completed.path}`);
  })
  .catch(error => {
    console.log(error.message);
  });
```

### JavaScript

```js
var Downloader = require('@triniwiz/nativescript-downloader').Downloader;
Downloader.setTimeout(120); //Increase timeout default 60s
```

```js
var Downloader = require('@triniwiz/nativescript-downloader').Downloader;
var downloader = new Downloader();
var imageDownloaderId = downloadManager.createDownload({
  url:
    'https://wallpaperscraft.com/image/hulk_wolverine_x_men_marvel_comics_art_99032_3840x2400.jpg'
});

downloader
  .start(imageDownloaderId, progressData => {
    console.log(`Progress : ${progressData.value}%`);
  })
  .then(completed => {
    console.log(`Image : ${completed.path}`);
  })
  .catch(error => {
    console.log(error.message);
  });
```

## Api

| Method                                   | Default | Type                         | Description                                           |
| ---------------------------------------- | ------- | ---------------------------- | ----------------------------------------------------- |
| createDownload(options: DownloadOptions) |         | `string`                     | Creates a download task it returns the id of the task |
| getStatus(id: string)                    |         | `StatusCode`                 | Gets the status of a download task.                   |
| start(id: string, progress?: Function)   |         | `Promise<DownloadEventData>` | Starts a download task.                               |  |
| resume(id: string)                       |         | `void`                       | Resumes a download task.                              |
| cancel(id: string)                       |         | `void`                       | Cancels a download task.                              |
| pause(id: string)                        |         | `void`                       | Pauses a download task.                               |
| getPath(id: string)                      |         | `void`                       | Return the path of a download task.                   |

## Example Image

| IOS                                     | Android                                     |
| --------------------------------------- | ------------------------------------------- |
| ![IOS](https://i.imgur.com/WQqhhXF.gif) | ![Android](https://i.imgur.com/fE9rBvl.gif) |


## Angular 

### Custom Downloader option
```typescript 
  // Request format for Downlaoder
             DownloadOptions {
             url: string;
             query?: Object | string;
             headers?: Object;
            path?: string;
             fileName?: string;
          }
```

### Service File To use any where

```typescript 
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Downloader, ProgressEventData, DownloadEventData } from '@triniwiz/nativescript-downloader';



@Injectable({
    providedIn: 'root',
})


export class DataDownLoadService {
    public database: any;
    downloader: Downloader = new Downloader();
    constructor() { }


    /**
    * @ngdoc method
    * @name downloadDb
    * @description  download generic method for nay file 
    * @memberof DataDownLoadService
    * @param apiUrl : - https://myserver.com/mypath
    * @param filename :- myfile.zip ...
    * @param downloadlocation : mobile local location
    */
    downloadFile(apiUrl, filename, downloadlocation) {
        const subject = new Subject<any>();
    
        // Request format for Downlaoder
        //      DownloadOptions {
        //     url: string;
        //     query?: Object | string;
        //     headers?: Object;
        //     path?: string;
        //     fileName?: string;
        //   }

        // Prepare the header with token work
    
        const headerHttp = {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + 'Token...'
        }

        const url =  apiUrl;

        const zipDownloaderId = this.downloader.createDownload({
            url: url,
            headers: headerHttp,
            path: downloadlocation,
            fileName: filename
        });

        this.downloader
            .start(zipDownloaderId, (progressData: ProgressEventData) => {
                console.log(`Progress : ${progressData.value}%`);
                console.log(`Current Size : ${progressData.currentSize}%`);
                console.log(`Total Size : ${progressData.totalSize}%`);
                console.log(`Download Speed in bytes : ${progressData.speed}%`);
            })
            .then((completed: DownloadEventData) => {
                console.log(`zip file saved at : ${completed.path}`);
              
               
                
                subject.next(true);
              
            })
            .catch(error => {
                console.log('downloadDb', error.message);
                subject.error(error);

            });

        return subject.asObservable();
    }



}
```


# TODO

* [ ] Local Notifications


Apache License Version 2.0
