import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListTableComponent } from './product-list/product-list-table/product-list-table.component';
import { MaterialModule } from '../material/material.module';
import { AdminRouteModule } from '../admin-route/admin-route.module';
import { ProductDetailsFormComponent } from './product-details/product-details-form/product-details-form.component';
import { AdminServiceModule } from '../admin-service/admin-service.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductListTableComponent,
    ProductDetailsFormComponent,
  ],
  imports: [CommonModule, MaterialModule, AdminRouteModule, AdminServiceModule],
})
export class CatalogModule {}
