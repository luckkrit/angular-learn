import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRouteModule } from '../admin-route/admin-route.module';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { CatalogModule } from '../catalog/catalog.module';
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  declarations: [AdminComponent, LayoutComponent, SideMenuComponent, NavbarComponent],
  imports: [
    CommonModule,
    AdminRouteModule,
    MaterialModule,
    DashboardModule,
    FontAwesomeModule,
    CatalogModule,
  ],
  exports: [AdminComponent],
})
export class AdminModule {}
