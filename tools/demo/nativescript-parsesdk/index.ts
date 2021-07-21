import {DemoSharedBase} from '../utils';
import TNSParse from "@triniwiz/nativescript-parsesdk";

export class DemoSharedNativescriptParsesdk extends DemoSharedBase {
  constructor() {
    super();
    TNSParse.init({
      // change to dev machine ip to from a real device device
      server: global.isIOS ? 'http://localhost:1337/parse' : 'http://10.0.2.2:1337/parse',
      applicationId: 'cNTU9YkuElWLCnNk7jDXmJhF3TUj7XiByEKiil9e',
      clientKey: '',
      enableLocalDataStore: true,
      maxRetries: 10
    });
    this.testUser().then(r => {
    });
  }

  async testUser() {
    let user = TNSParse.User.currentUser();
    console.log(user);
    if (!user) {
      try {
        user = await TNSParse.User.logIn('triniwiz', 'thing');
      } catch (e) {
        console.log(e);
        try {
          user = new TNSParse.User();
          user.username = 'triniwiz';
          user.password = 'thing';
          user.email = 'fortune.osei@yahoo.com';
          await user.signUp();
          console.log('Signup Done');
          await this.testData();
        } catch (e) {
          console.error('Signup failed')
        }
      }

    } else {
      await this.testData();
    }
  }

  async testData() {
    const file = new TNSParse.File('Destiny2', '~/assets/big_buck_bunny.mp4', 'video/mp4');
    try {
      await file.save();
      console.log('File saved');
      const person = new TNSParse.Object('Person');
      person.set('First', 'Osei');
      person.set('Last', 'Fortune');
      person.set('Image', file);
      await person.save();
      console.log('Saved data');
    } catch (e) {
      console.error('Failed to save');
    }
  }
}
