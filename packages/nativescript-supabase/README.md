# Nativescript Supabase

```javascript
ns plugin add @triniwiz/nativescript-supabase
```

## Usage

### [Database](https://supabase.io/docs/guides/database)

```ts
import {createClient} from '@triniwiz/nativescript-supabase';

const client = createClient('supabaseUrl', 'supabaseKey');

  // Select from table `countries` ordering by `name`
  const response = await client
      .from('countries')
      .select()
      .order('name', ascending: true)
      .execute();
}
```

### [Authentication](https://supabase.io/docs/guides/auth)

```ts
import {createClient} from '@triniwiz/nativescript-supabase';

const client = createClient('supabaseUrl', 'supabaseKey');

// Sign up user with email and password
const response = await client.auth.signUp('email', 'password');
```



### [Storage](https://supabase.io/docs/guides/storage)

```ts
import {File as nsFile, knownFolders, path} from '@nativescript/core';
import {createClient} from '@triniwiz/nativescript-supabase';

 const client = createClient('supabaseUrl', 'supabaseKey');
  
  // Create file `example.txt` and upload it in `public` bucket
  const exampleText = path.join(knownFolders.documents().path, 'example.txt');
  const file = nsFile.fromPath(exampleText);
  file.writeTextSync('File content');
  const storageResponse = await client
      .storage
      .from('public')
      .upload('example.txt', exampleText);
```



Check out the [**Official Documentation**](https://supabase.io/docs/gotrue/client/initializing) to learn all the other available methods.

## Credits

Based on [supabase-js](https://github.com/supabase/supabase-js)

## License

Apache License Version 2.0
