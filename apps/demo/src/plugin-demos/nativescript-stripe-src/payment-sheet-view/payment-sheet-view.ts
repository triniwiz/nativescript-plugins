import { DemoSharedNativescriptStripe } from '@demo/shared';
import { EventData, Page, Http } from "@nativescript/core";
import { PaymentSheet } from '@triniwiz/nativescript-stripe/paymentSheet';

export function pageLoaded(args: EventData) {
  const page = <Page>args.object;
  const vm = new PaymentSheetDemoModel();
  page.bindingContext = vm;
}

export async function openSheet(event) {
  try {
    const response = await Http.request({
      method: 'POST',
      url: `http://${global.isAndroid ? '10.0.2.2' : 'localhost'}:3000/payment-sheet`
    });
    const data = response.content.toJSON();
    PaymentSheet.presentWithPaymentIntent(
      data['paymentIntent'], {
      merchantDisplayName: 'Triniwiz NativeScript',
      allowsDelayedPaymentMethods: true,
      customerConfig: {
        id: data['customer'],
        ephemeralKey: data['ephemeralKey']
      },
      style: 'dark',
      primaryButtonColor: 'red',
      defaultBillingDetails: {
        email: 'fortune.osei@yahoo.com',
        name: 'Osei Fortune',
        phone: '+18683210123',
        address: {
          city: 'Cupertino',
          country: 'United States',
          postalCode: '95014',
          state: 'California',
          line1: 'Apple Inc',
          line2: 'One Apple Park Way'
        }
      }
    }
    )
  } catch (e) {
    console.log('openSheet error:', e);
  }
}

export class PaymentSheetDemoModel extends DemoSharedNativescriptStripe {
}
