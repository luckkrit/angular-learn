import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CatalogModule} from "./catalog/catalog.module";
import {HomeModule} from "./home/home.module";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home/home.component";
import {ProductListComponent} from "./catalog/product/product-list/product-list.component";
import {ProductDetailComponent} from "./catalog/product/product-detail/product-detail.component";
import {BackendService} from "./backend.service";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CatalogModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
