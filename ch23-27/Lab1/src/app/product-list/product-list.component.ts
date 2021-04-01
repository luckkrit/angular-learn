import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { Product } from '../product';
import {ProductItemComponent} from '../product-item/product-item.component';
import {BackendService} from '../backend.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];

  @ViewChildren(ProductItemComponent)
  productItems: QueryList<ProductItemComponent>;

  selectedProductItemComponent: ProductItemComponent;

  constructor(private backendService: BackendService) {
    this.products = this.backendService.getProducts();
  }

  randomPrice(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit(): void {}

  selectedProduct(productItemComponent: ProductItemComponent): void {
    alert(`Product ${productItemComponent.product.name} selected`);
    this.productItems.forEach((p) => {
      p.isSelected = false;
    });
    console.log(productItemComponent.product.name);
    productItemComponent.isSelected = true;
    this.selectedProductItemComponent = productItemComponent;
  }
}
