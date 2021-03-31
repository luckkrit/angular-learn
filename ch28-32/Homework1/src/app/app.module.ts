import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShippingModule } from './shipping/shipping.module';
import { ShippingFormComponent } from './shipping/shipping-form/shipping-form.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShippingModule],
  providers: [],
  bootstrap: [ShippingFormComponent],
})
export class AppModule {}
