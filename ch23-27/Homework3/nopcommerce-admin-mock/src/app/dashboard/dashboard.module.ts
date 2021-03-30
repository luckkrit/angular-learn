import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WindowComponent } from './window/window.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [DashboardComponent, WindowComponent, WelcomeComponent, NewsComponent],
  imports: [CommonModule, MaterialModule, FontAwesomeModule],
})
export class DashboardModule {}
