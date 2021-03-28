import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PortfolioModule],
  providers: [],
  bootstrap: [PortfolioComponent],
})
export class AppModule {}
