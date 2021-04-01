import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { BackendService } from '../backend.service';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductItemComponent, ProductDetailComponent],
  imports: [CommonModule],
  providers: [BackendService],
  exports: [ProductComponent],
})
export class CatalogModule {}
