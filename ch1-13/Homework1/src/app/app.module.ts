import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { TopBannerComponent } from './home/top-banner/top-banner.component';
import { CategoryMenuComponent } from './home/category-menu/category-menu.component';
import { SearchBarComponent } from './home/navbar/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TopBannerComponent,
    CategoryMenuComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
