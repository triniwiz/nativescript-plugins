import {UserBase} from "./common";

export declare class User extends UserBase {
  static currentUser(): User;

  static logIn(username: string, password: string): Promise<User>;

  static logInSync(username: string, password: string): User | null;

  static logOut(): Promise<void>;

  static logOutSync(): void;

  username: string;
  password: string;
  email: string;

  set(key: string, value: any): void;

  get(key: string): any;

  signUp(): Promise<void>;

  signUpSync(): boolean;
}
