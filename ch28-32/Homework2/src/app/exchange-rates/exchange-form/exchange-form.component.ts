import { Component, Input, OnInit } from '@angular/core';
import { ExchangeService } from '../exchange-service/exchange.service';
import { Exchange } from '../exchange-models/exchange';
import { Ratio } from '../exchange-models/ratio';

@Component({
  selector: 'app-exchange-form',
  templateUrl: './exchange-form.component.html',
  styleUrls: ['./exchange-form.component.css'],
})
export class ExchangeFormComponent implements OnInit {
  @Input()
  from: string;
  @Input()
  to: string;
  fromValue = 1;
  toValue = 1;
  currencies: Exchange[];
  currencyCodes = [];
  currentExchange: Exchange;
  ratio: Ratio;

  constructor(private exchangeService: ExchangeService) {}

  ngOnInit(): void {
    this.currencies = this.exchangeService.currencies;
    this.currencyCodes = this.currencies.map((m) => m.currencyCode);
    this.getExchangeRate();
  }

  onFromSelected($event: string): void {
    this.from = $event;
    this.getExchangeRate();
  }
  onToSelected($event: string): void {
    this.to = $event;
    this.getExchangeRate();
  }

  switchCurrency(): void {
    const oldFrom = this.from;
    const oldTo = this.to;
    this.from = oldTo;
    this.to = oldFrom;
    this.getExchangeRate();
  }

  ontoChanged($event: string): void {
    this.to = $event;
    this.getExchangeRate();
  }

  onFromChanged($event: string): void {
    this.from = $event;
    this.getExchangeRate();
  }
  getExchangeRate(): void {
    if (
      this.exchangeService.isCurrencyCodeValid(this.from) &&
      this.exchangeService.isCurrencyCodeValid(this.to)
    ) {
      this.exchangeService
        .getCurrenciesFromTo(this.from, this.to)
        .subscribe((exchange: Exchange) => {
          this.currentExchange = exchange;
          this.ratio = new Ratio(1, this.currentExchange.spot);
          this.fromValue = 1;
          this.toValue = exchange.spot;
        });
    }
  }

  toValueChanged($event: any): void {
    console.log('toValueChanged = ', $event);
    const convertValue = this.exchangeService.convert(
      this.ratio.to,
      this.ratio.from,
      $event
    );
    this.fromValue = convertValue;
  }

  fromValueChanged($event: any): void {
    console.log('fromValueChanged = ', $event);
    const convertValue = this.exchangeService.convert(
      this.ratio.from,
      this.ratio.to,
      $event
    );
    this.toValue = convertValue;
  }
}
