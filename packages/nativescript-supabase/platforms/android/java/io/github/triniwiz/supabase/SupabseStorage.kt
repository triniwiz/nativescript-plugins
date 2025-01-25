package io.github.triniwiz.supabase

import io.github.jan.supabase.storage.Bucket
import io.github.jan.supabase.storage.BucketApi
import io.github.jan.supabase.storage.FileObject
import io.github.jan.supabase.storage.FileUploadResponse
import io.github.jan.supabase.storage.ImageTransformation
import io.github.jan.supabase.storage.Storage
import io.github.jan.supabase.storage.UploadData
import io.github.jan.supabase.storage.UploadSignedUrl
import io.github.jan.supabase.storage.update
import io.github.jan.supabase.storage.upload
import io.ktor.http.ContentType
import io.ktor.utils.io.ByteReadChannel
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import java.io.File
import java.nio.ByteBuffer
import kotlin.time.Duration.Companion.seconds


class SupabseStorage internal constructor(private val storage: Storage) {
  private val scope = CoroutineScope(Dispatchers.Default + Job())

  companion object {
    fun extractValue(input: String): Pair<Int, String>? {
      val regex = Regex("(\\d+)([bkmgtpBKMTP]?b)")
      val matchResult = regex.matchEntire(input)
      return matchResult?.groups?.let {
        val value = it[1]?.value?.toIntOrNull()
        val unit = it[2]?.value
        if (value != null && unit != null) {
          return@let Pair(value, unit)
        } else {
          return@let null
        }
      }
    }
  }

  class BucketOptions {
    var public: Boolean = false
    var fileSizeLimit: String? = null
    var allowedMimeTypes: Array<String>? = null
  }

  @JvmOverloads
  fun createBucket(id: String, options: BucketOptions? = null, callback: (Exception?) -> Void) {
    scope.launch {
      try {
        storage.createBucket(id) {
          options?.let {
            this.public = it.public
            it.allowedMimeTypes?.let { mimes ->
              this.allowedMimeTypes(mimes.toList())
            }
            it.fileSizeLimit?.let { sizeLimit ->
              extractValue(sizeLimit)?.let { size ->
                when (size.second) {
                  "b" -> {
                    this.fileSizeLimit = size.first.bytes
                  }

                  "kb" -> {
                    this.fileSizeLimit = size.first.kilobytes
                  }

                  "mb" -> {
                    this.fileSizeLimit = size.first.megabytes
                  }

                  "gb" -> {
                    this.fileSizeLimit = size.first.gigabytes
                  }

                  else -> {}
                }
              }
            }
          }
        }
        callback(null)
      } catch (e: Exception) {
        callback(e)
      }
    }
  }

  fun getBucket(id: String): FileApi {
    return FileApi(storage[id])
  }


  fun listBuckets(id: String, callback: (List<Bucket>?, Exception?) -> Void) {
    scope.launch {
      try {
        val buckets = storage.retrieveBuckets()
        callback(buckets, null)
      } catch (e: Exception) {
        callback(null, e)
      }
    }
  }

  @JvmOverloads
  fun updateBucket(
    id: String,
    options: BucketOptions? = null,
    callback: (Exception?) -> Void
  ) {
    scope.launch {
      try {
        storage.updateBucket(id) {
          options?.let {
            this.public = it.public
            it.allowedMimeTypes?.let { mimes ->
              this.allowedMimeTypes(mimes.toList())
            }
            it.fileSizeLimit?.let { sizeLimit ->
              extractValue(sizeLimit)?.let { size ->
                when (size.second) {
                  "b" -> {
                    this.fileSizeLimit = size.first.bytes
                  }

                  "kb" -> {
                    this.fileSizeLimit = size.first.kilobytes
                  }

                  "mb" -> {
                    this.fileSizeLimit = size.first.megabytes
                  }

                  "gb" -> {
                    this.fileSizeLimit = size.first.gigabytes
                  }

                  else -> {}
                }
              }
            }
          }
        }
        callback(null)
      } catch (e: Exception) {
        callback(e)
      }
    }
  }


  fun deleteBucket(id: String, callback: (Exception?) -> Void) {
    scope.launch {
      try {
        storage.deleteBucket(id)
        callback(null)
      } catch (e: Exception) {
        callback(e)
      }
    }
  }

  fun emptyBucket(id: String, callback: (Exception?) -> Void) {
    scope.launch {
      try {
        storage.emptyBucket(id)
        callback(null)
      } catch (e: Exception) {
        callback(e)
      }
    }
  }


  class FileApi internal constructor(private val api: BucketApi) {
    private val scope = CoroutineScope(Dispatchers.Default + Job())


    class FileOptions {

      var cacheControl: String = "3600"

      var contentType: String? = null

      var upsert: Boolean = false

      var duplex: String? = null

      var metadata: JsonObject? = null

      var headers: Map<String, String>? = null

      fun setMeta(json: String) {
        try {
          this.metadata = Json.decodeFromString<JsonObject>(json)
        } catch (_: Exception) {
        }
      }
    }

    class TransformOptions {
      var width: Int? = null
      var height: Int? = null
      var resize: String? = null
      var quality: Int? = null
      var format: String? = null
    }

    class SortBy {
      var column: String? = null
      var order: String? = null
    }

    class SearchOptions {

      var limit: Int? = null

      var offset: Int? = null

      var sortBy: SortBy? = null

      var search: String? = null
    }

    @JvmOverloads
    fun upload(
      path: String,
      data: ByteArray,
      options: FileOptions? = null,
      callback: (FileUploadResponse?, Exception?) -> Void
    ) {
      scope.launch {
        try {
          val response = api.upload(path, data) {
            options?.let {
              this.upsert = it.upsert
              it.contentType?.let { contentType ->
                try {
                  this.contentType = ContentType.parse(contentType)
                } catch (_: Exception) {
                }

                it.headers?.let { headers ->
                  this.httpOverride {
                    headers.forEach { entry ->
                      this.headers.append(entry.key, entry.value)
                    }
                  }
                }
              }
            }
          }
          callback(response, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }

    @JvmOverloads
    fun upload(
      path: String,
      file: File,
      options: FileOptions? = null,
      callback: (FileUploadResponse?, Exception?) -> Void
    ) {
      scope.launch {
        try {
          val response = api.upload(path, file) {
            options?.let {
              this.upsert = it.upsert
              it.contentType?.let { contentType ->
                try {
                  this.contentType = ContentType.parse(contentType)
                } catch (_: Exception) {
                }

                it.headers?.let { headers ->
                  this.httpOverride {
                    headers.forEach { entry ->
                      this.headers.append(entry.key, entry.value)
                    }
                  }
                }
              }
            }
          }
          callback(response, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }

    @JvmOverloads
    fun upload(
      path: String,
      data: ByteBuffer,
      options: FileOptions? = null,
      callback: (FileUploadResponse?, Exception?) -> Void
    ) {
      scope.launch {
        try {
          val response =
            api.upload(path, UploadData(ByteReadChannel(data), data.capacity().toLong())) {
              options?.let {
                this.upsert = it.upsert
                it.contentType?.let { contentType ->
                  try {
                    this.contentType = ContentType.parse(contentType)
                  } catch (_: Exception) {
                  }

                  it.headers?.let { headers ->
                    this.httpOverride {
                      headers.forEach { entry ->
                        this.headers.append(entry.key, entry.value)
                      }
                    }
                  }
                }
              }
            }
          callback(response, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }


    fun download(
      path: String,
      options: TransformOptions? = null,
      callback: (ByteBuffer?, Exception?) -> Void
    ) {
      scope.launch {
        try {
          val data = api.downloadPublic(
            path
          ) {
            this.transform {
              this.width = options?.width
              this.height = options?.height
              this.format = options?.format
              this.quality = options?.quality
              when (options?.resize) {
                "cover" -> {
                  this.resize = ImageTransformation.Resize.COVER
                }

                "contain" -> {
                  this.resize = ImageTransformation.Resize.CONTAIN
                }

                "fill" -> {
                  this.resize = ImageTransformation.Resize.FILL
                }
              }
            }
          }
          val ret = ByteBuffer.allocateDirect(data.size)
          ret.put(data)
          ret.rewind()
          callback(ret, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }

    fun list(
      path: String?,
      options: SearchOptions?,
      callback: (List<FileObject>?, Exception?) -> Void
    ) {
      scope.launch {
        try {
          val response = api.list {
            options?.let {
              this.offset = it.offset
              this.search = it.search
              this.limit = it.limit
              if (it.sortBy?.column != null && it.sortBy?.order != null) {
                this.sortBy(it.sortBy?.column!!, it.sortBy?.order!!)
              }
            }
          }
          callback(response, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }


    @JvmOverloads
    fun update(
      path: String,
      data: ByteArray,
      options: FileOptions? = null,
      callback: (FileUploadResponse?, Exception?) -> Void
    ) {
      scope.launch {
        try {
          val response = api.update(path, data) {
            options?.let {
              this.upsert = it.upsert
              it.contentType?.let { contentType ->
                try {
                  this.contentType = ContentType.parse(contentType)
                } catch (_: Exception) {
                }

                it.headers?.let { headers ->
                  this.httpOverride {
                    headers.forEach { entry ->
                      this.headers.append(entry.key, entry.value)
                    }
                  }
                }
              }
            }
          }
          callback(response, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }

    @JvmOverloads
    fun update(
      path: String,
      file: File,
      options: FileOptions? = null,
      callback: (FileUploadResponse?, Exception?) -> Void
    ) {
      scope.launch {
        try {
          val response = api.update(path, file) {
            options?.let {
              this.upsert = it.upsert
              it.contentType?.let { contentType ->
                try {
                  this.contentType = ContentType.parse(contentType)
                } catch (_: Exception) {
                }

                it.headers?.let { headers ->
                  this.httpOverride {
                    headers.forEach { entry ->
                      this.headers.append(entry.key, entry.value)
                    }
                  }
                }
              }
            }
          }
          callback(response, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }

    @JvmOverloads
    fun update(
      path: String,
      data: ByteBuffer,
      options: FileOptions? = null,
      callback: (FileUploadResponse?, Exception?) -> Void
    ) {
      scope.launch {
        try {
          val response =
            api.update(path, UploadData(ByteReadChannel(data), data.capacity().toLong())) {
              options?.let {
                this.upsert = it.upsert
                it.contentType?.let { contentType ->
                  try {
                    this.contentType = ContentType.parse(contentType)
                  } catch (_: Exception) {
                  }

                  it.headers?.let { headers ->
                    this.httpOverride {
                      headers.forEach { entry ->
                        this.headers.append(entry.key, entry.value)
                      }
                    }
                  }
                }
              }
            }
          callback(response, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }


    fun move(fromPath: String, toPath: String, callback: (Exception?) -> Void) {
      scope.launch {
        try {
          api.move(fromPath, toPath)
          callback(null)
        } catch (e: Exception) {
          callback(e)
        }
      }
    }

    fun copy(fromPath: String, toPath: String, callback: (Exception?) -> Void) {
      scope.launch {
        try {
          api.copy(fromPath, toPath)
          callback(null)
        } catch (e: Exception) {
          callback(e)
        }
      }
    }

    fun remove(paths: Array<String>, callback: (List<FileObject>?, Exception?) -> Void) {
      scope.launch {
        try {
          api.delete(paths.toList())
          // todo return deleted files
          callback(emptyList(), null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }

    @JvmOverloads
    fun createSignedUrl(
      path: String,
      expiresIn: Int,
      download: String?,
      options: TransformOptions? = null,
      callback: (String?, Exception?) -> Void
    ) {
      scope.launch {
        try {
          val response = if (download != null) {
            api.createSignedUrl(path, expiresIn.seconds) {
              this.width = options?.width
              this.height = options?.height
              this.format = options?.format
              this.quality = options?.quality
              when (options?.resize) {
                "cover" -> {
                  this.resize = ImageTransformation.Resize.COVER
                }

                "contain" -> {
                  this.resize = ImageTransformation.Resize.CONTAIN
                }

                "fill" -> {
                  this.resize = ImageTransformation.Resize.FILL
                }
              }
            }
          } else {
            api.createSignedUrl(path, expiresIn = expiresIn.seconds) {
              this.width = options?.width
              this.height = options?.height
              this.format = options?.format
              this.quality = options?.quality
              when (options?.resize) {
                "cover" -> {
                  this.resize = ImageTransformation.Resize.COVER
                }

                "contain" -> {
                  this.resize = ImageTransformation.Resize.CONTAIN
                }

                "fill" -> {
                  this.resize = ImageTransformation.Resize.FILL
                }
              }
            }
          }
          callback(response, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }

    fun createSignedUrls(
      paths: Array<String>,
      expiresIn: Int,
      download: String?,
      callback: (List<String>?, Exception?) -> Void
    ) {
      scope.launch {
        try {
          val response = api.createSignedUrls(expiresIn.seconds, paths.toList()).filter {
            it.error != null
          }.map {
            it.signedURL
          }

          callback(response, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }

    fun createSignedUploadUrl(path: String, callback: (UploadSignedUrl?, Exception?) -> Void) {
      scope.launch {
        try {
          val response = api.createSignedUploadUrl(path)
          callback(response, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }


    fun uploadToSignedUrl(
      path: String,
      token: String,
      data: ByteArray,
      options: FileOptions?,
      callback: (FileUploadResponse?, Exception?) -> Void
    ) {
      scope.launch {
        try {
          val response = api.uploadToSignedUrl(path, token, data) {

          }
          callback(response, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }


    @Throws(Exception::class)
    @JvmOverloads
    fun getPublicUrl(path: String, download: String?, options: TransformOptions? = null): String {
      val response = api.publicUrl(path)
      return response
    }
  }

  fun from(id: String): FileApi {
    return FileApi(storage.from(id))
  }
}
