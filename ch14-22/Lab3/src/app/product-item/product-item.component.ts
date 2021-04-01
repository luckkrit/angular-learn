import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Output()
  OnSelected: EventEmitter<Product> = new EventEmitter<Product>();

  @Input()
  product: Product;

  constructor() {}

  ngOnInit(): void {}

  selectedProduct(): void {
    this.OnSelected.emit(this.product);
  }
}
