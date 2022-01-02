import Foundation
import UIKit
import Stripe

@objcMembers
@objc(TNSStripe)
public class TNSStripe: NSObject {
    
    
    @nonobjc  static func createConfig(config: NSDictionary?) -> PaymentSheet.Configuration {
        var sheetConfig = PaymentSheet.Configuration()
        if(config != nil){
            let customerConfig = config!["customerConfig"] as? NSDictionary
            
            if(customerConfig != nil){
                let customer = PaymentSheet.CustomerConfiguration(id: customerConfig!["id"] as? String ?? "", ephemeralKeySecret: customerConfig!["ephemeralKey"] as? String ?? "")
                
                sheetConfig.customer = customer
            }
            
            let merchantDisplayName = config!["merchantDisplayName"] as? String
            
            if(merchantDisplayName != nil){
                sheetConfig.merchantDisplayName = merchantDisplayName!
            }
            
            
            sheetConfig.allowsDelayedPaymentMethods = config!["allowsDelayedPaymentMethods"] as? Bool ?? false
            
            let applePayConfig = config!["applePayConfig"] as? NSDictionary
            
            if(applePayConfig != nil){
                sheetConfig.applePay = PaymentSheet.ApplePayConfiguration(merchantId: applePayConfig!["merchantId"] as? String ?? "", merchantCountryCode: applePayConfig!["merchantCountryCode"] as? String ?? "")
            }
            let primaryButtonColor = config!["primaryButtonColor"] as? UIColor
            
            if(primaryButtonColor != nil){
                sheetConfig.primaryButtonColor = primaryButtonColor!
            }
            
            let defaultBillingDetails = config!["defaultBillingDetails"] as? NSDictionary
            
            if(defaultBillingDetails != nil){
                sheetConfig.defaultBillingDetails.name = defaultBillingDetails!["name"] as? String
                
                sheetConfig.defaultBillingDetails.phone = defaultBillingDetails!["phone"] as? String
                
                sheetConfig.defaultBillingDetails.email = defaultBillingDetails!["email"] as? String
                
                let address = defaultBillingDetails!["address"] as? NSDictionary
                if(address != nil){
                    sheetConfig.defaultBillingDetails.address.country = address!["country"] as? String
                    sheetConfig.defaultBillingDetails.address.line1 = address!["line1"] as? String
                    sheetConfig.defaultBillingDetails.address.line2 = address!["line2"] as? String
                    sheetConfig.defaultBillingDetails.address.postalCode = address!["postalCode"] as? String
                    sheetConfig.defaultBillingDetails.address.state = address!["state"] as? String
                    sheetConfig.defaultBillingDetails.address.city = address!["city"] as? String
                }
            }
            
            if #available(iOS 13.0, *){
                switch(config!["style"] as? String ?? "auto"){
                case "dark":
                    sheetConfig.style = .alwaysDark
                    break
                case "light":
                    sheetConfig.style = .alwaysLight
                    break
                default:
                    sheetConfig.style = .automatic
                    break
                }
            }
            
            sheetConfig.returnURL = config!["returnURL"] as? String
        }
        
        return sheetConfig
    }
    
    public static func presentWithPaymentIntent(_ clientSecret: String,_ config: NSDictionary,_ ctrl: UIViewController, _ callback: @escaping ((String, Error?) -> Void)){
        
        let paymentSheet = PaymentSheet(paymentIntentClientSecret: clientSecret, configuration: createConfig(config: config))
        
        paymentSheet.present(from: ctrl) { result in
            switch(result){
            case .completed:
                callback("completed", nil)
            case .canceled:
                callback("canceled", nil)
            case .failed(error: let error):
                callback("failed", error)
            }
        }
    }
    
    public static func presentWithSetupIntent(_ clientSecret: String,_ config: NSDictionary,_ ctrl: UIViewController, _ callback: @escaping ((String, Error?) -> Void)){
        
        let paymentSheet = PaymentSheet(setupIntentClientSecret: clientSecret, configuration: createConfig(config: config))
        
        
        paymentSheet.present(from: ctrl) { result in
            switch(result){
            case .completed:
                callback("completed", nil)
            case .canceled:
                callback("canceled", nil)
            case .failed(error: let error):
                callback("failed", error)
            }
        }
    }
    
}
