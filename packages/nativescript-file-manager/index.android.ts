import { ad } from '@nativescript/core/utils';
import { FileBase } from './common';
import { File as f} from '@nativescript/core';
export class File extends FileBase {
	private static _BUILD_VERSION = android.os.Build.VERSION.SDK_INT;

	public static fromPath(path: string) {
        console.log(this._BUILD_VERSION );
		if (this._BUILD_VERSION >= 29) {

            

            const read = f.fromPath(path + '/Deadpool.png');
            const data = read.readSync((error) => {
            console.log(error);
                });

                console.log(data);
                
            
			const dir = new java.io.File(path);
			console.log(android.os.Environment.isExternalStorageLegacy(dir), android.os.Environment.isExternalStorageEmulated(dir), path);
			const file = new java.io.File(path, 'Deadpool.png');
            const fileUri = android.net.Uri.fromFile(new java.io.File('/data/data/io.triniwiz.nativescript.plugindemo/files/app/assets/destiny_2.jpg'));//android.net.Uri.fromFile(dir);
            
			const ctx: android.content.Context = ad.getApplicationContext();
            console.log('uri to is', fileUri,ctx.getContentResolver().openInputStream(fileUri));

            const ms = android.provider.MediaStore.Downloads.EXTERNAL_CONTENT_URI;


            const projection = [android.provider.MediaStore.DownloadColumns._ID, android.provider.MediaStore.DownloadColumns.DISPLAY_NAME]
            const query = android.provider.MediaStore.DownloadColumns.DISPLAY_NAME + "=?"
            const files = [file.getName()];
            android.provider.MediaStore.Downloads.EXTERNAL_CONTENT_URI
            const uri = android.provider.MediaStore.Files.getContentUri(
                android.provider.MediaStore.VOLUME_EXTERNAL
              );
    

            //   MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
            //   new String[] { MediaStore.Images.Media._ID },
            //   MediaStore.Images.Media.DATA + "=? ",
            //   new String[] { filePath }, null);

        const cursor = ctx.getContentResolver().query(
            android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
            projection,
            query,
            files,
            null
        );

        console.log('count',cursor.getCount());
        while (cursor.moveToNext()) {
            const i = cursor.getColumnIndex(android.provider.MediaStore.DownloadColumns.DISPLAY_NAME);
            console.log(cursor.getString(i));
            // Use an ID column from the projection to get
            // a URI representing the media item itself.
        }



			try{
                ctx.getContentResolver().openInputStream(android.net.Uri.parse(ms.toString() + '/' + file.getName()))
            }catch(e){
                console.log(e);
            }
		} else {
		}
	}

    public readSync(){
        const ctx: android.content.Context = ad.getApplicationContext();
        ctx.getContentResolver().openOutputStream
    }
}
