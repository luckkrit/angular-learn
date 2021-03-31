import { Component, OnInit, ViewChild } from '@angular/core';
import { ExchangeFormComponent } from '../exchange-form/exchange-form.component';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css'],
})
export class ExchangeRatesComponent implements OnInit {
  @ViewChild('exchangeFormComponent')
  exchangeFormComponent: ExchangeFormComponent;
  isExchangeRatesForm = false;
  from = 'THB';
  to = 'USD';
  constructor() {}

  ngOnInit(): void {}

  onTabClick(): void {
    this.isExchangeRatesForm = !this.isExchangeRatesForm;
  }

  onCalculate($event: any): void {
    this.from = $event.from;
    this.to = $event.to;
    this.exchangeFormComponent.from = this.from;
    this.exchangeFormComponent.to = this.to;
    this.exchangeFormComponent.getExchangeRate();
    this.isExchangeRatesForm = true;
  }
}
