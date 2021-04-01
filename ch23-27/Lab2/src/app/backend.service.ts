import { Injectable } from '@angular/core';
import { Product } from './catalog/product/models/product';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor() {}

  getProducts(): Product[] {
    const products = [];
    for (let i = 0; i < 10; i++) {
      products.push(
        new Product(
          `Product ${i + 1}`,
          `An example of product ${i + 1}`,
          this.randomPrice(1, 5),
          10
        )
      );
    }
    return products;
  }

  randomPrice(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
