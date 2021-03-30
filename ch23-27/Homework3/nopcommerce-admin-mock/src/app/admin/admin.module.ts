import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRouteModule } from '../admin-route/admin-route.module';
import { MaterialModule } from '../material/material.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CatalogModule } from '../catalog/catalog.module';
import { AuthenticationModule } from '../authentication/authentication.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRouteModule,
    MaterialModule,
    DashboardModule,
    FontAwesomeModule,
    CatalogModule,
    AuthenticationModule,
  ],
  exports: [AdminComponent],
})
export class AdminModule {}
