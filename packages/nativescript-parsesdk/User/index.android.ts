import {UserBase} from "./common";

export class User extends UserBase {
  readonly android: com.parse.ParseUser;

  constructor(user?: any) {
    super();
    if (user instanceof com.parse.ParseUser) {
      this.android = user;
    } else {
      this.android = new com.parse.ParseUser();
    }
  }

  static currentUser() {
    const user = com.parse.ParseUser.getCurrentUser();
    if (user) {
      return new User(user);
    }
    return null;
  }

  static logIn(userName: string, password: string) {
    return new Promise((resolve, reject) => {
      com.parse.ParseUser.logInInBackground(userName, password, new com.parse.LogInCallback({
        done(user: com.parse.ParseUser, ex: com.parse.ParseException): void {
          if (ex) {
            reject(ex?.getCode())
          } else {
            resolve(new User(user));
          }
        }
      }))
    })
  }

  static logInSync(userName: string, password: string) {
    const user = com.parse.ParseUser.logIn(userName, password);
    if (user) {
      return new User(user)
    }
    return null;
  }

  static logOut() {
    return new Promise((resolve, reject) => {
      com.parse.ParseUser.logOutInBackground(new com.parse.LogOutCallback({
        done(param0: com.parse.ParseException): void {
          if (param0) {
            reject(param0.getCode());
          } else {
            resolve();
          }
        }
      }))
    });
  }

  static logOutSync() {
    com.parse.ParseUser.logOut();
  }

  signUp() {
    return new Promise((resolve, reject) => {
      this.android.signUpInBackground(new com.parse.SignUpCallback({
        done(ex: com.parse.ParseException): void {
          if (ex) {
            reject(ex?.getCode())
          } else {
            resolve();
          }
        }
      }));
    })
  }

  signUpSync() {
    const task = this.android.signUpInBackground();
    task.waitForCompletion();
    if (task.isFaulted()) {
      return false;
    } else if (task.isCancelled()) {
      return false;
    } else return task.isCompleted();
  }

  get email(): string {
    return this.android.getEmail();
  }

  set email(value: string) {
    this.android.setEmail(value);
  }

  set password(value: string) {
    this.android.setPassword(value);
  }

  get username(): string {
    return this.android.getUsername();
  }

  set username(value: string) {
    this.android.setUsername(value);
  }

  get(value: string): any {
    return this.android.get(value);
  }

  set(key: string, value: any) {
    this.android.put(key, value);
  }
}
