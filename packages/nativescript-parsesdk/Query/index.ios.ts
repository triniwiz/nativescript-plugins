import {QueryBase} from "./common";
import {Object as ParseObject} from '../Object';

export class Query extends QueryBase {
  readonly ios: PFQuery<any>;

  constructor(name: string | ParseObject) {
    super();
    if (name instanceof ParseObject) {
      this.ios = PFQuery.alloc().initWithClassName(name.ios.parseClassName);
    } else {
      this.ios = PFQuery.alloc().initWithClassName(name);
    }
  }

  get(key: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.ios.getObjectInBackgroundWithIdBlock(key,(object, error)=>{
        if (error) {

        } else {

        }
      });
    });
  }

  getSync(key: string) {
    return this.ios.getObjectWithId(key)
  }
}
