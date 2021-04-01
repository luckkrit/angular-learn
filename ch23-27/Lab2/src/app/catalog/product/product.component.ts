import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from './models/product';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, AfterViewInit {
  @ViewChild('productList')
  productList: ProductListComponent;

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.productList.products = this.productList.products.concat(
      this.backendService.getProducts()
    );
  }
}
