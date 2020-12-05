import {CHIPageControllable} from "@triniwiz/nativescript-pager/ios/core/CHIPageControl";

@NativeClass
class AnimationFrameImpl extends NSObject {
  private _owner: WeakRef<CHIPageControllable>;

  public static initWithOwner(owner: WeakRef<CHIPageControllable>): AnimationFrameImpl {
    const handler = <AnimationFrameImpl>AnimationFrameImpl.new();
    handler._owner = owner;
    return handler;
  }

  public handleFrame(args) {
    if (this._owner) {
      const owner = this._owner.get();
      if (owner) {
        owner.updateFrame()
      }
    }
  }

  public static ObjCExposedMethods = {
    handleFrame: {returns: interop.types.void, params: [CADisplayLink]},
  };
}
export {AnimationFrameImpl};
