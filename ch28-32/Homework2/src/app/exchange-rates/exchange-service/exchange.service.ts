import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exchange } from '../exchange-models/exchange';
import { Observable, of, pipe } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Ratio } from '../exchange-models/ratio';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  currencies = [
    new Exchange('USD', 'US dollar'),
    new Exchange('JPY', 'Japanese yen'),
    new Exchange('BGN', 'Bulgarian lev'),
    new Exchange('CZK', 'Czech koruna'),
    new Exchange('DKK', 'Danish krone'),
    new Exchange('GBP', 'Pound sterling'),
    new Exchange('HUF', 'Hungarian forint'),
    new Exchange('PLN', 'Polish zloty'),
    new Exchange('RON', 'Romanian leu'),
    new Exchange('SEK', 'Swedisk krona'),
    new Exchange('CHF', 'Swiss franc'),
    new Exchange('ISK', 'Icelandic krona'),
    new Exchange('NOK', 'Norwegian krone'),
    new Exchange('HRK', 'Croatian kuna'),
    new Exchange('RUB', 'Russian rouble'),
    new Exchange('TRY', 'Turkish lira'),
    new Exchange('AUD', 'Australian dollar'),
    new Exchange('BRL', 'Brazilian real'),
    new Exchange('CAD', 'Canadian dollar'),
    new Exchange('CNY', 'Chinese yuan renminbi'),
    new Exchange('HKD', 'Hong Kong dollar'),
    new Exchange('IDR', 'Indonesian rupiah'),
    new Exchange('ILS', 'Israeli shekel'),
    new Exchange('INR', 'Indian rupee'),
    new Exchange('KRW', 'South Korean won'),
    new Exchange('MXN', 'Mexican peso'),
    new Exchange('MYR', 'Malaysian ringgit'),
    new Exchange('NZD', 'New Zealand dollar'),
    new Exchange('PHP', 'Philippine peso'),
    new Exchange('SGD', 'Singapore dollar'),
    new Exchange('THB', 'Thai baht'),
    new Exchange('ZAR', 'South African rand'),
  ];
  constructor(private httpClient: HttpClient) {}
  getCurrenciesFromTo(from: string, to: string): Observable<any> {
    return this.httpClient
      .get(`https://api.exchangeratesapi.io/latest?symbols=${to}&base=${from}`)
      .pipe(
        map((response: any) => {
          const currencyCode = Object.keys(response.rates)[0];
          const currencyRate = response.rates[currencyCode];
          const currencyName = this.currencies.find(
            (m) => m.currencyCode === currencyCode
          ).currencyName;
          return new Exchange(currencyCode, currencyName, currencyRate);
        }),
        catchError((error) => error)
      );
  }
  getCurrenciesBaseOn(base: string): Observable<any> {
    return this.httpClient
      .get(`https://api.exchangeratesapi.io/latest?base=${base}`)
      .pipe(
        map((response: any) => {
          Object.keys(response.rates).forEach((rate) => {
            const exchange = this.currencies.find(
              (c) => c.currencyCode === rate
            );
            const spot = response.rates[rate];
            if (exchange && spot) {
              exchange.spot = spot;
            }
          });
          return this.currencies;
        }),
        catchError((error) => error)
      );
  }
  isCurrencyCodeValid(currencyCode: string): boolean {
    return (
      this.currencies.filter((c) => c.currencyCode === currencyCode).length > 0
    );
  }
  convert(from: number, to: number, newFrom: number): number {
    if (newFrom === 0) {
      return to;
    } else {
      return (newFrom * to) / from;
    }
  }
}
