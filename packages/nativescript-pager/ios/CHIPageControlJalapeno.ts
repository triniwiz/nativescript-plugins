import {CHILayer} from "./core/CHILayer";
import {CHIPageControllable} from "./core/CHIPageControl";
import {AnimationFrameImpl} from "./core/AnimationFrame";

@NativeClass
class CHIPageControlJalapeno extends UIControl implements CHIPageControllable {


  /*
    Base Controller
   */

  private _numberOfPages: number;
  get numberOfPages(): number {
    return this._numberOfPages;
  }

  set numberOfPages(value: number) {
    this._numberOfPages = value;
    this.populateTintColors()
    this.updateNumberOfPages(this.numberOfPages)
    this.hidden = this.hidesForSinglePage && this.numberOfPages <= 1
  }


  private _progress: number;
  get progress(): number {
    return this._progress
  }

  set progress(value: number) {
    this._progress = value;
    this.update(value)
  }


  get currentPage(): number {
    return round(this.progress)
  }

  private _padding: number;
  get padding(): number {
    return this._padding;
  }

  set padding(value: number) {
    this._padding = value;
    this.setNeedsLayout()
    this.update(this.progress)
  }


  private _radius: number;
  get radius(): number {
    return this._radius
  }

  set radius(value: number) {
    this._radius = value;
    this.setNeedsLayout()
    this.update(this.progress)
  }

  private _inactiveTransparency: number;
  get inactiveTransparency(): number {
    return this._inactiveTransparency;
  }

  set inactiveTransparency(value: number) {
    this._inactiveTransparency = value;
    this.setNeedsLayout()
    this.update(this.progress)
  }

  private _hidesForSinglePage: boolean;
  get hidesForSinglePage(): boolean {
    return this._hidesForSinglePage;
  }

  set hidesForSinglePage(value: boolean) {
    this._hidesForSinglePage = value;
    this.setNeedsLayout()
  }

  private _borderWidth: number;

  get borderWidth(): number {
    return this._borderWidth;
  }

  set borderWidth(value: number) {
    this._borderWidth = value;
    this.setNeedsLayout()
  }

  private _tintColor: UIColor;
  get tintColor(): UIColor {
    return this._tintColor
  }

  set tintColor(value: UIColor) {
    this._tintColor = value;
    this.setNeedsLayout()
  }

  private _tintColors: UIColor[];

  get tintColors() {
    return this._tintColors
  }

  set tintColors(value: UIColor[]) {
    if (value.length !== this.numberOfPages) {
      console.log("The number of tint colors needs to be the same as the number of page")
    } else {
      this._tintColors = value;
      this.setNeedsLayout()
    }
  }

  private _currentPageTintColor?: UIColor

  get currentPageTintColor() {
    return this._currentPageTintColor
  }

  set currentPageTintColor(value: UIColor) {
    this._currentPageTintColor = value;
    this.setNeedsLayout()
  }

  moveToProgress?: number

  setProgressAnimated(progress: number, animated: boolean) {
    if (progress <= this.numberOfPages - 1 && progress >= 0) {
      if (animated === true) {
        this.moveToProgress = progress
      } else {
        this.progress = progress
      }
    }
  }

  getTintColor(position: number): UIColor {
    if (this.tintColors.length < this.numberOfPages) {
      return this.tintColor
    } else {
      return this.tintColors[position]
    }
  }

  insertTintColor(color: UIColor, position: number) {
    if (this.tintColors.length < this.numberOfPages) {
      this.setupTintColors()
    }
    this.tintColors[position] = color
  }

  setupTintColors() {
    const colors = [];
    for (let i = 0; i < this.numberOfPages; i++) {
      colors.push(this.tintColor);
    }
    this.tintColors = colors;
  }

  populateTintColors() {
    if (this.tintColors.length > 0) {
      if (this.tintColors.length > this.numberOfPages) {
        this.tintColors = this.tintColors.slice(0, this.numberOfPages)
      } else if (this.tintColors.length < this.numberOfPages) {
        const colors = [...this.tintColors];
        const count = this.numberOfPages - this.tintColors.length;
        for (let i = 0; i < count; i++) {
          colors.push(this.tintColor)
        }
        this.tintColors = colors;
      }
    }
  }

  animate() {
    if (this.moveToProgress) {
      let a = fabsf(this.moveToProgress)
      let b = fabsf(this.progress)

      if (a > b) {
        this.progress += 0.1
      }
      if (a < b) {
        this.progress -= 0.1
      }

      if (a === b) {
        this.progress = this.moveToProgress
        this.moveToProgress = null
      }

      if (this.progress < 0) {
        this.progress = 0
        this.moveToProgress = null
      }

      if (this.progress > this.numberOfPages - 1) {
        this.progress = this.numberOfPages - 1
        this.moveToProgress = null
      }
    }
  }

  blend(color1: UIColor, color2: UIColor, progress: number): UIColor {
    let l1 = 1 - progress
    let l2 = progress
    // (r1, g1, b1, a1)
    const value1: [interop.Reference<number>, interop.Reference<number>, interop.Reference<number>, interop.Reference<number>] = [
      new interop.Reference<number>(), new interop.Reference<number>(), new interop.Reference<number>(), new interop.Reference<number>()];
    const r1 = value1[0];
    const g1 = value1[1];
    const b1 = value1[2];
    const a1 = value1[3];
    // (r2, g2, b2, a2):
    const value2: [interop.Reference<number>, interop.Reference<number>, interop.Reference<number>, interop.Reference<number>] = [
      new interop.Reference<number>(), new interop.Reference<number>(), new interop.Reference<number>(), new interop.Reference<number>()];
    const r2 = value2[0];
    const g2 = value2[1];
    const b2 = value2[2];
    const a2 = value2[3];
    color1.getRedGreenBlueAlpha(r1, g1, b1, a1);
    color2.getRedGreenBlueAlpha(r2, g2, b2, a2);

    return UIColor.colorWithRedGreenBlueAlpha(l1 * r1.value + l2 * r2.value, l1 * g1.value + l2 * g2.value, l1 * b1.value + l2 * b2.value, l1 * a1.value + l2 * a2.value)
  }

  dealloc() {
    this.displayLink.removeFromRunLoopForMode(NSRunLoop.currentRunLoop, NSRunLoopCommonModes);
    this.displayLink.invalidate()
    super.dealloc();
  }

  _animationFrameImpl;

  updateFrame() {
    this.animate()
  }

  private displayLink: CADisplayLink

  _setupDisplayLink() {
    this.displayLink = CADisplayLink.displayLinkWithTargetSelector(
      this._animationFrameImpl, 'handleFrame'
    );
    this.displayLink.addToRunLoopForMode(NSRunLoop.currentRunLoop, NSDefaultRunLoopMode);
    this.displayLink.addToRunLoopForMode(NSRunLoop.currentRunLoop, UITrackingRunLoopMode);
  }

  /*
Base Controller
   */

  lastPage: number;

  get diameter() {
    return this.radius * 2
  }

  inactive: CHILayer[];
  active: CHILayer;

  initWithCoder(coder: NSCoder): this {
    const self = super.initWithCoder(coder);
    this._initProps();
    return self;
  }

  _initProps() {
    this._tintColor = UIColor.systemBlueColor;
    this._animationFrameImpl = AnimationFrameImpl.initWithOwner(new WeakRef(this));
    this.lastPage = 0;
    this._hidesForSinglePage = true;
    this._numberOfPages = 0;
    this._progress = 0;
    this._radius = 10;
    this._inactiveTransparency = 0.4;
    this._borderWidth = 0;
    this._padding = 5;
    this._tintColors = [];
    this.inactive = [];
    this.active = CHILayer.new()
    this._setupDisplayLink();
  }

  initWithFrame(frame: CGRect): this {
    const self = super.initWithFrame(frame);
    this._initProps();
    return self;
  }

  updateNumberOfPages(count: number) {
    this.inactive.forEach(item => {
      item.removeFromSuperlayer()
    });

    this.inactive = [];
    for (let i = 0; i < count; i++) {
      const layer = CHILayer.new();
      this.layer.addSublayer(layer);
      this.inactive.push(
        layer
      )
    }

    this.layer.addSublayer(this.active)
    this.setNeedsLayout()
    this.invalidateIntrinsicContentSize()
  }

  layoutSubviews() {
    super.layoutSubviews()
    let floatCount = this.inactive.length;
    let x = Math.ceil((this.bounds.size.width - this.diameter * floatCount - this.padding * (floatCount - 1)) * 0.5)
    let y = Math.ceil((this.bounds.size.height - this.diameter) * 0.5)
    const frame: any = CGRectMake(x, y, this.diameter, this.diameter);

    this.active.cornerRadius = this.radius
    this.active.backgroundColor = (this.currentPageTintColor ? this.currentPageTintColor : this.tintColor).CGColor
    this.active.frame = frame

    this.inactive.forEach((layer, index) => {
      layer.backgroundColor = this.getTintColor(index).colorWithAlphaComponent(this.inactiveTransparency).CGColor
      if (this.borderWidth > 0) {
        layer.borderWidth = this.borderWidth
        layer.borderColor = this.getTintColor(index).CGColor
      }
      layer.cornerRadius = this.radius
      layer.frame = frame
      frame.origin.x += this.diameter + this.padding
    })
    this.update(this.progress)
  }

  update(progress: number) {
    const hasProgress = progress >= 0 && progress <= (this.numberOfPages - 1);
    const firstFrame = this.inactive[0]?.frame;
    const isNotEmpty = this.numberOfPages;
    if (hasProgress && firstFrame && isNotEmpty) {
      let left = firstFrame.origin.x
      let normalized = progress * (this.diameter + this.padding)

      let currentPage = progress
      let stepSize = (this.diameter + this.padding)
      var leftX = (currentPage) * stepSize + left
      var rightX = (normalized) + left
      let stepProgress = progress - (currentPage)

      if (abs(this.lastPage - currentPage) > 1) {
        this.lastPage = currentPage + (this.lastPage > currentPage ? 1 : -1)
      }

      var middleX = (normalized)
      if (stepProgress > 0.5) {
        if (this.lastPage > currentPage) {
          rightX = (this.lastPage) * stepSize + left
          leftX = leftX + (((stepProgress) - 0.5) * stepSize * 2)
          middleX = leftX
        } else {
          leftX = leftX + (((stepProgress) - 0.5) * stepSize * 2)
          rightX = (this.currentPage) * stepSize + left
          middleX = rightX
        }
      } else if (this.lastPage > currentPage) {
        rightX = (this.lastPage) * stepSize - ((0.5 - (stepProgress)) * stepSize * 2) + left
        middleX = leftX
      } else {
        rightX = rightX + ((stepProgress) * stepSize)
        middleX = rightX
      }

      let top = (this.bounds.size.height - this.diameter) * 0.5

      let points: CGPoint[] = [
        CGPointMake(leftX, this.radius + top),
        CGPointMake(middleX + this.radius, top),
        CGPointMake(rightX + this.radius * 2, this.radius + top),
        CGPointMake(middleX + this.radius, this.radius * 2 + top)
      ]

      let offset = this.radius * 0.55

      let path = UIBezierPath.alloc().init()
      path.moveToPoint(points[0])
      path.addCurveToPointControlPoint1ControlPoint2(points[1], CGPointMake(points[0].x, points[0].y - offset), CGPointMake(points[1].x - offset, points[1].y))
      path.addCurveToPointControlPoint1ControlPoint2(points[2], CGPointMake(points[1].x + offset, points[1].y), CGPointMake(points[2].x, points[2].y - offset))
      path.addCurveToPointControlPoint1ControlPoint2(points[3], CGPointMake(points[2].x, points[2].y + offset), CGPointMake(points[3].x + offset, points[3].y))
      path.addCurveToPointControlPoint1ControlPoint2(points[0], CGPointMake(points[3].x - offset, points[3].y), CGPointMake(points[0].x, points[0].y + offset))
      this.active.path = path.CGPath

      if (progress % 1 === 0) {
        this.lastPage = progress
      }
    }
  }

  get intrinsicContentSize(): CGSize {
    return this.sizeThatFits(CGSizeZero)
  }

  sizeThatFits(size: CGSize): CGSize {
    return CGSizeMake(this.inactive.length * this.diameter + this.inactive.length - this.padding, this.diameter)
  }
}

export {CHIPageControlJalapeno}
