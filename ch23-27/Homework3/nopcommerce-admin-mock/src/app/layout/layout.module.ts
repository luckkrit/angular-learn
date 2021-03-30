import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { MaterialModule } from '../material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LayoutComponent, NavbarComponent, SideMenuComponent],
  imports: [CommonModule, MaterialModule, FontAwesomeModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
