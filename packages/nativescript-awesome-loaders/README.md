#NativeScript Awesome Loaders
#Installation
`ns plugin add @triniwiz/nativescript-awesome-loaders`

#Usage

TypeScript
```ts
import {AwesomeLoaders} from '@triniwiz/nativescript-awesome-loaders';

 let li = new AwesomeLoaders();
 al.width = 60;
 al.height = 60;
 al.indicator = "SemiCircleSpin";
 al.indicatorColor= "black";
```


###XML markup settings

IMPORTANT: ensure you include xmlns:al="@triniwiz/nativescript-awesome-loaders" on the Page element

e.g
`    <al:AwesomeLoaders width="60" height="60"   indicator="Pacman" indicatorColor="#FFEB3B" /> `

##Indicators

As seen above in the Screenshot, the indicators are as follows:

**Row 1**
 * `BallPulse`
 * `BallGridPulse`
 * `BallClipRotate`
 * `BallClipRotatePulse`

**Row 2**
 * `SquareSpin`
 * `BallClipRotateMultiple`
 * `BallPulseRise`
 * `BallRotate`

**Row 3**
 * `CubeTransition`
 * `BallZigZag`
 * `BallZigZagDeflect`
 * `BallTrianglePath`

**Row 4**
 * `BallScale`
 * `LineScale`
 * `LineScaleParty`
 * `BallScaleMultiple`

**Row 5**
 * `BallPulseSync`
 * `BallBeat`
 * `LineScalePulseOut`
 * `LineScalePulseOutRapid`

**Row 6**
 * `BallScaleRipple`
 * `BallScaleRippleMultiple`
 * `BallSpinFadeLoader`
 * `LineSpinFadeLoader`

**Row 7**
 * `TriangleSkewSpin`
 * `Pacman`
 * `BallGridBeat`
 * `SemiCircleSpin`
 
**Row 8** iOS only
  * `BallRotateChase`
  * `Orbit`
  * `AudioEqualizer`
  * `CircleStrokeSpin`
