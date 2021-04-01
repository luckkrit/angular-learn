import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Output()
  OnSelected: EventEmitter<ProductItemComponent> = new EventEmitter<ProductItemComponent>();

  @Input()
  product: Product;

  @Output()
  isSelected: boolean;

  constructor() {
    this.isSelected = false;
  }

  ngOnInit(): void {}

  selectedProduct(): void {
    if (this.product) {
      this.OnSelected.emit(this);
    }
  }
}
