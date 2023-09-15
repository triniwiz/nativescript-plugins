package com.github.triniwiz.plugins.messenger;

import android.content.Context;
import android.content.Intent;
import android.content.pm.ResolveInfo;
import android.net.Uri;
import android.os.Build;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.channels.FileChannel;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.StandardCopyOption;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.List;

public class Utils {

  public static void grantUriPermission(Uri uri, Intent intent, Context context) {
    List<ResolveInfo> resInfoList = context.getPackageManager().queryIntentActivities(intent, android.content.pm.PackageManager.MATCH_DEFAULT_ONLY);
    for (ResolveInfo resolveInfo : resInfoList) {
      String packageName = resolveInfo.activityInfo.packageName;
      context.grantUriPermission(
        packageName, uri, Intent.FLAG_GRANT_READ_URI_PERMISSION
      );
    }
  }

  public static Uri getContentUri(String path, String fileName, Context ctx) {
    Uri uri = getUriForPath(path, fileName, ctx);
    File file = new File(uri.getPath());
    if (!file.exists()) {
      return null;
    } else {
      return androidx.core.content.FileProvider.getUriForFile(ctx, ctx.getPackageName() + ".provider", file);
    }
  }

  static void deleteFile(File file) {
    try {
      if (file.isDirectory()) {
        File[] entries = file.listFiles();
        for (File currentFile : entries) {
          deleteFile(currentFile);
        }
        file.delete();
      } else {
        file.delete();
      }
    } catch (Exception ignored) {
    }
  }

  public static void cleanAttachmentFolder(Context ctx) {
    File dir = ctx.getExternalCacheDir();

    if (dir == null) {
      return;
    }

    File storage = new File(dir, "msgcomposer");

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      try {
        Files.walkFileTree(storage.toPath(), new SimpleFileVisitor<Path>() {
          @Override
          public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
            Files.delete(file);
            return FileVisitResult.CONTINUE;
          }

          @Override
          public FileVisitResult postVisitDirectory(Path dir, IOException exc) throws IOException {
            if (exc != null) {
              throw exc;
            }
            Files.delete(dir);
            return FileVisitResult.CONTINUE;
          }
        });
      } catch (IOException ignored) {
      }
    } else {
      deleteFile(storage);
    }
  }


  public static Uri getUriForPath(String path, String fileName, Context ctx) {
    if (path.startsWith("file:///")) {
      return getUriForAbsolutePath(path);
    } else if (path.startsWith("file://")) {
      return getUriForAssetPath(path, fileName, ctx);
    } else if (path.startsWith("base64:")) {
      return getUriForBase64Content(path, fileName, ctx);
    } else {
      if (path.contains(ctx.getPackageName())) {
        return getUriForAssetPath(path, fileName, ctx);
      } else {
        return getUriForAbsolutePath(path);
      }
    }
  }


  public static Uri getUriForAbsolutePath(String path) {
    String absPath = path.replace("file://", "");
    File file = new File(absPath);
    if (!file.exists()) {
      return null;
    } else {
      return Uri.fromFile(file);
    }
  }

  static File tempFile(Context context, String fileName) {
    File dir = context.getExternalCacheDir();
    if (dir == null) {
      return null;
    }
    File composer = new File(dir, "msgcomposer");

    try {
      if (!composer.exists()) {
        composer.mkdir();
      }
    } catch (Exception e) {
      return null;
    }
    return new File(composer, fileName);
  }

  static File copyFile(File file, String fileName, Context context) {
    File copied = tempFile(context, fileName);

    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
      Path toCopy = file.toPath();
      if (copied == null) {
        return null;
      }
      try {
        Files.copy(toCopy, copied.toPath(), StandardCopyOption.REPLACE_EXISTING);
        return copied;
      } catch (IOException e) {
        return null;
      }
    } else {
      try {
        FileInputStream inputStream = new FileInputStream(file);
        FileOutputStream outputStream = new FileOutputStream(copied);
        FileChannel inChannel = inputStream.getChannel();
        FileChannel outChannel = outputStream.getChannel();

        inChannel.transferTo(0, inChannel.size(), outChannel);
        inChannel.close();
        outChannel.close();
        inputStream.close();
        outputStream.close();
        return copied;
      } catch (IOException e) {
        return null;
      }
    }
  }

  static File copyData(byte[] bytes, String fileName, Context context) {
    File copied = tempFile(context, fileName);
    try {
      FileOutputStream outputStream = new FileOutputStream(copied);
      outputStream.write(bytes);
      outputStream.close();
      return copied;
    } catch (IOException e) {
      return null;
    }
  }

  public static Uri getUriForAssetPath(String path, String fileName, Context ctx) {
    String newPath = path.replace("file://", "/");
    File file = new File(newPath);
    if (!file.exists()) {
      return null;
    }

    File copy = copyFile(file, fileName, ctx);
    if (copy == null) {
      return Uri.EMPTY;
    }
    return Uri.fromFile(copy);
  }

  static Uri getUriForBase64Content(String path, String fileName, Context ctx) {
    String resData = path.substring(path.indexOf("://") + 3);
    byte[] bytes;
    try {
      bytes = android.util.Base64.decode(resData, 0);
    } catch (Exception e) {
      return Uri.EMPTY;
    }
    File copy = copyData(bytes, fileName, ctx);

    if (copy == null) {
      return Uri.EMPTY;
    }
    return Uri.fromFile(copy);
  }


}
