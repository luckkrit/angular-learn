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
    path: '',
    pathMatch: 'full',
    redirectTo: '/admin',
  },
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
    path: 'categories',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'manufactures',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'product-reviews',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'product-tags',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'product-attributes',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'specification-attributes',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'checkout-attributes',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'orders',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'shipments',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'return-requests',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'recurring-payments',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'gift-cards',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'shopping-cart-and-wishlists',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'customers',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'customer-roles',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'online-customers',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'vendors',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'activity-log',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'activity-types',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'gdpr-requests-log',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'discounts',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'affiliates',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'newsletter-subscribers',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'campaigns',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'topic-pages',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'message-template',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'news-items',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'news-comments',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'blog-posts',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'blog-comments',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'polls',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'forums',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'general-settings',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'customer-settings',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'order-settings',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'shipping-settings',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'tax-settings',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'catalog-settings',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'shopping-cart-settings',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'reward-points',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'gdpr-settings',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'vendor-settings',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'blog-settings',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'news-settings',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'forum-settings',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'media-settings',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'app-settings',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'all-settings-advanced',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'email-accounts',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'stores',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'countries',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'languages',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'currencies',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'payment-methods',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'payment-restrictions',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'tax-providers',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'tax-categories',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'shipping-providers',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'warehouses',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'pickup-points',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'dates-and-ranges',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'measures',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'access-control-list',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'widgets',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'external-authentication',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'multi-factor-authentication',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'local-plugins',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'all-plugin-and-themes',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'system-ifnormation',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'log',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'warnings',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'maintenance',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'message-queue',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'schedule-tasks',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'search-engine-friendly-page-names',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'templtes',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'sales-summary-report',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'low-stock-report',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'best-sellers-report',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'products-never-purchased-report',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'country-sales-report',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'registered-customers-report',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'customer-by-order-total-report',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'customer-by-number-of-orders-report',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'help-topics',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'community-forums',
    component: ProductListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'premium-support-services',
    component: ProductListComponent,
    canActivate: [AdminGuard],
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
