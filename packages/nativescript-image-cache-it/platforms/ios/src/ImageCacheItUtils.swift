//
//  ImageCacheItUtils.swift
//  NativeScript ImageCacheIt
//
//  Created by Osei Fortune on 19/10/2020.
//

import Foundation
import UIKit
import SDWebImage

@objc(ImageCacheItUtils)
public class ImageCacheItUtils: NSObject {
    private static var queueCount: Int64 = 0
    @objc public static func createConcurrentQueue(_ name: String) -> DispatchQueue {
        ImageCacheItUtils.queueCount += 1
        return DispatchQueue(label: name, attributes: .concurrent)
    }

    @objc public static func createSerialQueue(_ name: String) -> DispatchQueue {
        ImageCacheItUtils.queueCount += 1
        return DispatchQueue(label: name)
    }
    
    @objc public static func createContext() -> CIContext {
        let metalDevice = MTLCreateSystemDefaultDevice()
        
        if(metalDevice != nil){
            return CIContext(mtlDevice: metalDevice!)
        }
        
        if #available(iOS 12.0, *) {
            return CIContext()
        }else {
            
            let context = EAGLContext(api: .openGLES3) ?? EAGLContext(api: .openGLES2)
            
            if(context != nil){
                return CIContext(eaglContext: context!)
            }
            
            return CIContext()
        }
    }


    public static func resizeImage(_ image: UIImage? , _ width: CGFloat,_ height: CGFloat, _ scale: SDImageScaleMode, _ callback: @escaping (UIImage?)-> Void, _ queue: DispatchQueue?) -> DispatchQueue? {
        guard image != nil else {
            DispatchQueue.main.async {
                callback(nil)
            }
            return nil
        }
        let q = queue ?? createConcurrentQueue("ImageCacheUtils-Queue-" + String(queueCount))
        q.async {
        let resizedImage = image?.sd_resizedImage(with: CGSize(width: width, height: height), scaleMode: scale)
            DispatchQueue.main.async {
                callback(resizedImage)
            }
        }
        return q
    }


    @objc public static func applyProcessing(_ ctx: CIContext,_ image: UIImage?, _ filters: [String: Any], _ callback: @escaping (UIImage?)-> Void, _ queue: DispatchQueue?) -> DispatchQueue? {
            guard image != nil else {
                DispatchQueue.main.async {
                    callback(nil)
                }
                return nil
            }
            let q = queue ?? createConcurrentQueue("ImageCacheUtils-Queue-" + String(queueCount))
            q.async {
                let filter = filters["filter"] as? String
                let filteredImage = applyFilters(image, ctx,filter)
                if let overLayer = filters["overlayColor"] as? String {
                    let overlayImage = createImageOverlay(filteredImage, overLayer)
                    DispatchQueue.main.async {
                        callback(overlayImage)
                    }
                }else {
                    DispatchQueue.main.async {
                        callback(filteredImage)
                    }
                }
            }

        return q
        }




    @objc public static func createImageOverlay(_ image: UIImage?, _ color: String) -> UIImage? {

        let rgba = color.replacingOccurrences(of: "rgba(", with: "").replacingOccurrences(of: ")", with: "").replacingOccurrences(of: " ", with: "").split(separator: ",")
        let formatter = NumberFormatter()
        let red = CGFloat(Int32(truncating: formatter.number(from: String(rgba[0])) ?? 255)) / 255.0
        let green = CGFloat(Int32(truncating:formatter.number(from: String(rgba[1])) ?? 255)) / 255.0
        let blue = CGFloat(Int32(truncating:formatter.number(from: String(rgba[2])) ?? 255)) / 255.0
        let alpha = CGFloat(truncating: formatter.number(from: String(rgba[3])) ?? 1)

        return createImageOverlayColors(image, image?.size.width ?? 0 , image?.size.height ?? 0, red, green, blue, alpha)
    }
    
    @objc public static func createImageOverlayColors(_ image: UIImage?,_ width: CGFloat,_ height: CGFloat,_ red: CGFloat,_ green: CGFloat,_ blue: CGFloat,_ alpha: CGFloat) -> UIImage? {
        if(image == nil){
            return image
        }
        let zero = CGFloat(0)
        let rect = CGRect(x: zero, y: zero, width: CGFloat(width), height: CGFloat(height))
        let width = image!.cgImage!.width
        let height = image!.cgImage!.height

        let colourSpace = CGColorSpaceCreateDeviceRGB()
        let imageContext =  CGContext(data: nil,
                                      width: width,
                                      height: height,
                                      bitsPerComponent: 8,
                                      bytesPerRow: width * 4,
                                      space: colourSpace,
                                      bitmapInfo: CGImageAlphaInfo.premultipliedFirst.rawValue | CGBitmapInfo.byteOrder32Little.rawValue)

        imageContext?.draw(image!.cgImage!, in: rect)
        let maskImage = image!.cgImage

        if(maskImage != nil){
            imageContext?.clip(to: rect, mask: maskImage!)
        }
        imageContext?.setFillColor(red: red, green: green, blue: blue, alpha: alpha)
        imageContext?.fill(rect)
        let outputImage = imageContext!.makeImage()
        return UIImage(cgImage: outputImage!)
    }

    private static var filterCache: [String: CIFilter] = [:]

    private static func getFilterByName(_ name: String,_ image: UIImage?) -> CIFilter?{
        let ciFilter: CIFilter? = filterCache[name]
        var filter = ciFilter?.copy(with : nil) as? CIFilter
        if (filter == nil){
            filter = CIFilter(name:name)
            filterCache[name] = filter!
        }else {
            filter?.setDefaults()
        }

        if let ref = image {
            if (ref.ciImage != nil) {
                filter?.setValue(ref.ciImage!, forKey: kCIInputImageKey)
                filter?.setValue(nil, forKey: CIImageOption.colorSpace.rawValue)
            } else {
                if (ref.cgImage != nil) {
                    filter?.setValue(CIImage(cgImage: ref.cgImage!), forKey: kCIInputImageKey)
                }
            }
        }
        return filter
    }

    private static func getFilterByName(_ name: String,_ image: CIImage?) -> CIFilter?{
        let ciFilter: CIFilter? = filterCache[name]
        var filter = ciFilter?.copy(with : nil) as? CIFilter
        if (filter == nil){
            filter = CIFilter(name:name)
            filterCache[name] = filter!
        }else {
            filter?.setDefaults()
        }

        if let ref = image {
            filter?.setValue(ref, forKey: kCIInputImageKey)
        }
        return filter
    }

    private static func createAlphaImage(_ image: UIImage?, _ alpha: CGFloat) -> CIImage? {
        if(image == nil){
            return nil
        }
        let zero = CGFloat(0)
        let width = image!.cgImage!.width
        let height = image!.cgImage!.height
        let rect = CGRect(x: zero, y: zero, width: CGFloat(width), height: CGFloat(height))
        let colourSpace = CGColorSpaceCreateDeviceRGB()
        let imageContext =  CGContext(data: nil,
                                      width: width,
                                      height: height,
                                      bitsPerComponent: 8,
                                      bytesPerRow: width * 4,
                                      space: colourSpace,
                                      bitmapInfo: CGImageAlphaInfo.premultipliedFirst.rawValue | CGBitmapInfo.byteOrder32Little.rawValue)
        imageContext?.setAlpha(alpha)
        imageContext?.draw(image!.cgImage!, in: rect)
        guard let outputImage = imageContext?.makeImage() else {return nil}
        return CIImage(cgImage: outputImage)
    }


    private static func applyFilters(_ image: UIImage?, _ ctx: CIContext,_ filter: String?) -> UIImage? {
        if(image == nil){
            return nil
        }
        var realImage = image!
        if(filter != nil){
            func getValue(_ value: String) -> String? {
                guard let startIndex = value.firstIndex(of: "(") else {return nil}
                let start = value.index(after: startIndex)
                guard let endIndex = value.firstIndex(of: ")") else {return nil}
                let end = value.index(before: endIndex)
                return String(value[start ... end])
            }
            func getFilterName(_ value: String) -> String? {
                guard let endIndex = value.firstIndex(of: "(") else {return nil}
                let end = value.index(before: endIndex)
                return String(value[...end])
            }
            func createFilterWithName(_ value: String) -> CIFilter?{
                return getFilterByName(value, image)
            }
            func createFilterWithName(_ value: String, _ filteredImage: CIImage?) -> CIFilter?{
                return getFilterByName(value, filteredImage)
            }

            let imageFilters = filter?.split(separator: " ").map {
                String($0)
            } ?? []
            var filteredImage: CIImage?
            for imageFilter in imageFilters {
                let value = getValue(imageFilter)
                switch getFilterName(imageFilter) {
                case "blur":
                    var width: CGFloat?
                    if let size = value {
                        if(size.contains("%")){
                            if let percent = Float(size.replacingOccurrences(of: "%", with: "")) {
                                width = CGFloat((CGFloat(percent) / 100.0) * realImage.size.width)
                            }
                        }else if(size.contains("px")){
                            if let px = Float(size.replacingOccurrences(of: "px", with: "")) {
                                width = CGFloat(px) * UIScreen.main.scale
                            }
                        }else if(size.contains("dip")) {
                            if let dip = Float(size.replacingOccurrences(of: "dip", with: "")) {
                                width = CGFloat(dip)
                            }

                        }else{
                            if let raw = Float(size){
                                width = CGFloat(raw)
                            }
                        }

                        if var realWidth = width {
                            if (realWidth > 25) {
                                realWidth = 25
                            }

                            if (realWidth > -1) {
                                var blurFilter: CIFilter?
                                if(filteredImage == nil){
                                    blurFilter = createFilterWithName("CIGaussianBlur")
                                }else {
                                    blurFilter = createFilterWithName("CIGaussianBlur", filteredImage)
                                }
                                
                                blurFilter?.setValue(width, forKey: kCIInputRadiusKey)
                                if let blurredImg = blurFilter?.value(forKey: kCIOutputImageKey) as? CIImage {
                                    filteredImage = blurredImg

                                }
                            }
                        }
                    }
                    break
                case "contrast":
                    if let size = value {
                        if (size.contains("%")) {
                            if let contrast = Float(size.replacingOccurrences(of: "%", with: "")) {
                                _ = contrast / 100.0
                                var contrastFilter: CIFilter?
                                if(filteredImage == nil){
                                    contrastFilter = createFilterWithName("CIColorControls")
                                }else {
                                    contrastFilter = createFilterWithName("CIColorControls", filteredImage)
                                }
                                contrastFilter?.setValue(contrast, forKey: kCIInputContrastKey)
                                if let contrastImg: CIImage = contrastFilter?.value(forKey: kCIOutputImageKey)  as? CIImage{
                                    filteredImage = contrastImg
                                }

                            }
                        }
                    }
                    break
                case "brightness":
                    if let size = value {
                        if (size.contains("%")) {
                            if let brightness = Float(size.replacingOccurrences(of: "%", with: "")) {
                                /* if (brightness >= 0 && brightness < 1) {
                                 brightness = -1 + brightness;
                                 }*/

                                var brightnessFilter: CIFilter?
                                if(filteredImage == nil){
                                    brightnessFilter = createFilterWithName("CIColorControls")
                                }else {
                                    brightnessFilter = createFilterWithName("CIColorControls", filteredImage)
                                }
                                brightnessFilter?.setValue(brightness, forKey: kCIInputBrightnessKey)
                                if let brightnessImg = brightnessFilter?.value(forKey: kCIOutputImageKey) as? CIImage {
                                    filteredImage = brightnessImg
                                }

                            }
                        }
                    }
                    break
                case "greyscale" , "grayscale":
                    var grayscale: CGFloat = 0
                    if let size = value {
                        if (size.contains("%")) {
                            if let realSize = Float(size.replacingOccurrences(of: "%", with: "")) {
                                grayscale = CGFloat(realSize / 100.0)
                            }
                        } else if (size.contains(".")) {
                            if let realSize = Float(size) {
                                grayscale = CGFloat(realSize)
                            }
                        } else {
                            if let realSize = Float(size) {
                                grayscale = CGFloat(realSize)
                            }
                        }

                        if (grayscale > 1) {
                            grayscale = 1;
                        }

                        grayscale = 1 - grayscale;

                        var grayscaleFilter: CIFilter?
                        if(filteredImage == nil){
                            grayscaleFilter = createFilterWithName("CIColorControls")
                        }else {
                            grayscaleFilter = createFilterWithName("CIColorControls", filteredImage)
                        }
                        grayscaleFilter?.setValue(grayscale, forKey: kCIInputSaturationKey)
                        if let grayscaleImg = grayscaleFilter?.value(forKey: kCIOutputImageKey) as? CIImage {
                            filteredImage = grayscaleImg
                        }
                    }
                    break
                case "invert":
                    // TODO handle value
                    var invertFilter: CIFilter?
                    if(filteredImage == nil){
                       invertFilter = createFilterWithName("CIColorInvert")
                    }else {
                        invertFilter = createFilterWithName("CIColorInvert", filteredImage)
                    }
                    if let invertImg = invertFilter?.value(forKey: kCIOutputImageKey) as? CIImage{
                        filteredImage = invertImg
                    }
                    break
                case "sepia":
                    if let size = value {
                        if let sepia = Float(size.replacingOccurrences(of: "%", with: "")) {
                            let realSize = sepia / 100
                            var sepiaFilter: CIFilter?
                            if(filteredImage == nil){
                               sepiaFilter = createFilterWithName("CISepiaTone")
                            }else {
                              sepiaFilter = createFilterWithName("CISepiaTone", filteredImage)
                            }
                            sepiaFilter?.setValue(realSize, forKey: kCIInputIntensityKey)
                            if let sepiaImg = sepiaFilter?.value(forKey: kCIOutputImageKey) as? CIImage {
                                filteredImage = sepiaImg
                            }
                        }
                    }
                    break
                case "opacity":
                    if let size = value {
                        var alpha: CGFloat = 1
                        if (size.contains("%")) {
                            if let realSize = Float(size.replacingOccurrences(of: "%", with: "")) {
                                alpha = CGFloat(realSize / 100)
                            }
                        } else if (size.contains(".")) {
                            if let realSize = Float(size) {
                                alpha = CGFloat(realSize)
                            }
                        } else {
                            if let realSize = Float(size) {
                                alpha = CGFloat(realSize)
                            }
                        }
                        if let newImage = createAlphaImage(realImage, alpha) {
                            filteredImage = newImage
                        }
                    }
                    break
                case "hue":
                    var hueFilter: CIFilter?
                    if(filteredImage == nil){
                        hueFilter = createFilterWithName("CIHueAdjust")
                    }else {
                        hueFilter = createFilterWithName("CIHueAdjust", filteredImage)
                    }
                    var hue = 0
                    if let realValue = value {
                        if (realValue.contains("deg")) {
                            if let realHue = Int(realValue.replacingOccurrences(of: "deg", with: "")){
                                hue = realHue
                            }
                        } else if (realValue.contains("turn")) {
                            if let realHue = Int(realValue.replacingOccurrences(of: "turn", with: "")){
                                hue = realHue * 360
                            }
                        }
                        hueFilter?.setValue(hue, forKey: kCIInputAngleKey)

                        if let hueImg = hueFilter?.value(forKey: kCIOutputImageKey) as? CIImage {
                            filteredImage = hueImg
                        }
                    }
                    break
                case "saturate":
                    var saturateFilter: CIFilter?
                    if(filteredImage == nil){
                        saturateFilter = createFilterWithName("CIColorControls")
                    }else {
                        saturateFilter = createFilterWithName("CIColorControls", filteredImage)
                    }
                    var saturate: CGFloat?
                    if let size = value {
                        if(size.contains("%")){
                            if let realSize = Float(size.replacingOccurrences(of: "%", with: "")){
                                saturate = CGFloat(realSize / 100)
                            }
                        }else if(size.contains(".")){
                            if let realSize = Float(size){
                                saturate = CGFloat(realSize)
                            }
                        }else {
                            if let realSize = Float(size){
                                saturate = CGFloat(realSize)
                            }
                        }
                    }

                    if let sat = saturate {
                        saturateFilter?.setValue(sat, forKey: kCIInputSaturationKey)
                        if let saturateImg = saturateFilter?.value(forKey: kCIOutputImageKey) as? CIImage {
                            filteredImage = saturateImg
                        }
                    }
                    break
                default:
                    // NOOP
                    break
                }
            }
            if let cIImage = filteredImage {
                    if let cgImage = ctx.createCGImage(cIImage, from: cIImage.extent){
                                realImage = UIImage(cgImage: cgImage)
                            }
                        }
        }
        return realImage
    }
}

