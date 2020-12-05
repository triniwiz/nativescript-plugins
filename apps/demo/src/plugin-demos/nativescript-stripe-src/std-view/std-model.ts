
import { Observable } from '@nativescript/core';
import { ObservableProperty } from './observable-decorator';

export class StdDemoModel extends Observable {
    @ObservableProperty() item = { id: 0, name: "Something to buy", price: 1200 };
    @ObservableProperty() isLoading = true;
    @ObservableProperty() canBuy = false;
    @ObservableProperty() paymentInProgress = false;
    @ObservableProperty() paymentType = "Select Payment";
    @ObservableProperty() paymentImage = null;
    @ObservableProperty() shippingType = "Enter Shipping Info";
    @ObservableProperty() total = 1200;
    @ObservableProperty() successMessage = "";
    @ObservableProperty() errorMessage = "";
    @ObservableProperty() debugInfo = "";
}
