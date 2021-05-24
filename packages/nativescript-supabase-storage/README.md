# Nativescript nativescript-supabase-storage

```javascript
ns plugin add @triniwiz/nativescript-supabase-storage
```

## Usage

```ts
const avatarFile // 
const { data, error } = await supabase
  .storage
  .from('avatars')
  .upload('public/avatar1.png', avatarFile) 
  // File/Blob objects, NSData, byte array, ArrayBuffer & supports full path url

```

## Credits
Based on [storage-js](https://github.com/supabase/storage-js)

## License

Apache License Version 2.0
