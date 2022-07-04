import {UserBase} from "./common";

export class User extends UserBase {
  readonly ios: PFUser;

  constructor(user?: any) {
    super();
    if (user instanceof PFUser) {
      this.ios = user;
    } else {
      this.ios = PFUser.new();
    }
  }

  static currentUser() {
    const user = PFUser.currentUser();
    if (user) {
      return new User(user);
    }
    return null;
  }

  static logIn(userName: string, password: string) {
    return new Promise((resolve, reject) => {
      PFUser.logInWithUsernameInBackgroundPasswordBlock(userName, password, (user, error) => {
        if (error) {
          reject(error?.localizedDescription)
        } else {
          resolve(new User(user));
        }
      });
    })
  }

  static logInSync(userName: string, password: string) {
    const user = PFUser.logInWithUsernamePassword(userName, password);
    if (user) {
      return new User(user)
    }
    return null;
  }

  static logOut() {
    return new Promise((resolve, reject) => {
      PFUser.logOutInBackgroundWithBlock((error) => {
        if (error) {
          reject(error?.localizedDescription)
        } else {
          resolve(null);
        }
      });
    });
  }

  static logOutSync() {
    PFUser.logOut();
  }

  signUp() {
    return new Promise((resolve, reject) => {
      this.ios.signUpInBackgroundWithBlock((done, error) => {
        console.log(error);
        if (error) {
          reject(error?.localizedDescription)
        } else {
          resolve(done);
        }
      })
    })
  }

  signUpSync() {
    return this.ios.signUp();
  }

  get email(): string {
    return this.ios.email;
  }

  set email(value: string) {
    this.ios.email = value;
  }

  set password(value: string) {
    this.ios.password = value;
  }

  get username(): string {
    return this.ios.username;
  }

  set username(value: string) {
    this.ios.username = value;
  }

  get(value: string): any {
    return this.ios.objectForKey(value);
  }

  set(key: string, value: any) {
    this.ios.setObjectForKey(value, key);
  }
}
