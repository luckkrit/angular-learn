import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeFormComponent } from './exchange-form/exchange-form.component';
import { ExchangeRateListComponent } from './exchange-rate-list/exchange-rate-list.component';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeService } from './exchange-service/exchange.service';
import { DropdownListComponent } from './exchange-form/dropdown-list/dropdown-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExchangeFormComponent,
    ExchangeRateListComponent,
    ExchangeRatesComponent,
    DropdownListComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [ExchangeService],
  exports: [ExchangeRatesComponent],
})
export class ExchangeRatesModule {}
