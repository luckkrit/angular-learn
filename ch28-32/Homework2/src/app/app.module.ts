import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExchangeRatesModule } from './exchange-rates/exchange-rates.module';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates/exchange-rates.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ExchangeRatesModule],
  providers: [],
  bootstrap: [ExchangeRatesComponent],
})
export class AppModule {}
