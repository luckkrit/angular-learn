import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../authentication/login/login.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { AdminGuard } from '../admin/guards/admin.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogoutComponent } from '../authentication/logout/logout.component';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { ProductListComponent } from '../catalog/product-list/product-list.component';
import { ProductDetailsComponent } from '../catalog/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRouteModule {}
