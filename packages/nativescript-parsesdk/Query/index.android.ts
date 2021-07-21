import {QueryBase} from "./common";
import {Object as ParseObject} from '../Object';

export class Query extends QueryBase {
  readonly android: com.parse.ParseQuery<any>;

  constructor(name: string | ParseObject) {
    super();
    if (name instanceof ParseObject) {
      this.android = new com.parse.ParseQuery(name.android);
    } else {
      this.android = new com.parse.ParseQuery(name);
    }
  }

  get(key: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.android.getInBackground(key, new com.parse.GetCallback<any>({
        done(object: com.parse.ParseObject, param1: com.parse.ParseException): void {
          if (param1) {

          } else {

          }
        }
      }))
    });
  }

  getSync(key: string) {
    return this.android.get(key)
  }
}
