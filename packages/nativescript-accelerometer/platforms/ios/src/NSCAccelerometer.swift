import Foundation
import CoreMotion

@objc(NSCAccelerometerSensorDelay)
public enum NSCAccelerometerSensorDelay: Int, RawRepresentable {
    public typealias RawValue = Int
    case Normal
    case Game
    case UI
    case Fastest
    
    public var rawValue: Int {
        switch self {
        case .Normal:
            return 0
        case .Game:
            return 1
        case .UI:
            return 2
        case .Fastest:
            return 3
        }
    }
    
    var value: Double {
        switch self {
        case .Normal:
            return 0.2
        case .Game:
            return 0.02
        case .UI:
            return 0.06
        case .Fastest:
            return 0.001
        }
    }
}

@objc(NSCAccelerometer)
@objcMembers
public class NSCAccelerometer: NSObject {
    public static let accManager = CMMotionManager()
    public var data = Data(repeating: 0, count: 24)
    private let queue = OperationQueue()
    private var callback: ((Error?) -> Void)? = nil
    
    public var isAvailable: Bool {
        get {
            return NSCAccelerometer.accManager.isAccelerometerAvailable
        }
    }
    public var sensorDelay = NSCAccelerometerSensorDelay.Normal {
        didSet {
            NSCAccelerometer.accManager.deviceMotionUpdateInterval = sensorDelay.value
        }
    }
    private var isListeningForUpdates = false
    var isListening: Bool {
        get {
            return isListeningForUpdates
        }
    }
    public func startAccelerometerUpdates(){
        if(isListeningForUpdates){
            stopAccelerometerUpdates()
        }
        
        if(isAvailable){
            NSCAccelerometer.accManager.startAccelerometerUpdates(to: queue) { data, error in
                guard let data = data else {
                    self.callback?(error)
                    return
                }
                
                self.data.withUnsafeMutableBytes { pointer in
                    guard var pointer = pointer.baseAddress?.assumingMemoryBound(to: Double.self) else {return}
                    pointer.pointee = data.acceleration.x
                    pointer = pointer.advanced(by: 1)
                    pointer.pointee = data.acceleration.y
                    pointer = pointer.advanced(by: 1)
                    pointer.pointee = data.acceleration.z
                    
                    DispatchQueue.main.async {
                        self.callback?(nil)
                    }
                }
                
            }
            
            isListeningForUpdates = true;
        }
        
        
    }
    
    public func stopAccelerometerUpdates(){
        if (isListeningForUpdates) {
            NSCAccelerometer.accManager.stopAccelerometerUpdates();
            isListeningForUpdates = false;
        }
    }
    
}
