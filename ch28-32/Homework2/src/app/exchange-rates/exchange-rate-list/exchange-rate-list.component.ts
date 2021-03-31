import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExchangeService } from '../exchange-service/exchange.service';
import { Exchange } from '../exchange-models/exchange';

@Component({
  selector: 'app-exchange-rate-list',
  templateUrl: './exchange-rate-list.component.html',
  styleUrls: ['./exchange-rate-list.component.css'],
})
export class ExchangeRateListComponent implements OnInit {
  constructor(private exchangeService: ExchangeService) {}
  rates: Exchange[];
  currentRate = 'THB';
  from: string;
  to: string;
  @Output()
  OnCalculate: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {
    this.getExchangeRates();
  }
  getExchangeRates(): void {
    this.exchangeService
      .getCurrenciesBaseOn(this.currentRate)
      .subscribe((result) => {
        this.rates = result;
      });
  }

  onSwitchRate(rate: string): void {
    this.currentRate = rate;
    this.getExchangeRates();
  }

  onCalculateRate(currentRate: string, currencyCode: string): void {
    this.from = currentRate;
    this.to = currencyCode;
    this.OnCalculate.emit({ from: currentRate, to: currencyCode });
  }
}
