@NativeClass
class CHILayer extends CAShapeLayer {

  init() {
    const self = super.init();
    self.actions = {
      "bounds": NSNull.new(),
      "frame": NSNull.new(),
      "position": NSNull.new()
    } as any
    return self;
  }

  initWithCoder(coder: NSCoder): this {
    return super.initWithCoder(coder);
  }

  initWithLayer(layer: any): this {
    return super.initWithLayer(layer);
  }
}

export {CHILayer}
