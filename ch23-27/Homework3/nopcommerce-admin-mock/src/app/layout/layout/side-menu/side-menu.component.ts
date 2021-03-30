import { Component, OnInit } from '@angular/core';
import {
  faDesktop,
  faBook,
  faDotCircle,
  faShoppingCart,
  faUser,
  faTags,
  faCubes,
  faCogs,
  faCube,
  faChartLine,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { SideMenu } from '../models/side-menu';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {
  panelOpenState = false;
  faDesktop = faDesktop;
  faBook = faBook;
  faDotCircle = faDotCircle;
  faCircle = faCircle;
  faShoppingCart = faShoppingCart;
  faUser = faUser;
  faTags = faTags;
  faCubes = faCubes;
  faCogs = faCogs;
  faCube = faCube;
  faChartLine = faChartLine;
  faQuestionCircle = faQuestionCircle;

  menus = [
    new SideMenu('Dashboard', faDesktop, '/dashboard', []),
    new SideMenu('Catalog', faBook, '', [
      new SideMenu('Products', faDotCircle, '/products', []),
      new SideMenu('Categories', faDotCircle, '/categories', []),
      new SideMenu('Manufactures', faDotCircle, '/manufactures', []),
      new SideMenu('Product reviews', faDotCircle, '/product-reviews', []),
      new SideMenu('Product tags', faDotCircle, '/product-tags', []),
      new SideMenu('Attributes', faDotCircle, '', [
        new SideMenu('Product attributes', faCircle, '/product-attributes', []),
        new SideMenu(
          'Specification attributes',
          faCircle,
          '/specification-attributes',
          []
        ),
        new SideMenu(
          'Checkout attributes',
          faCircle,
          '/checkout-attributes',
          []
        ),
      ]),
    ]),
    new SideMenu('Sales', faShoppingCart, '', [
      new SideMenu('Orders', faDotCircle, '/orders', []),
      new SideMenu('Shipments', faDotCircle, '/shipments', []),
      new SideMenu('Return requests', faDotCircle, '/return-requests', []),
      new SideMenu(
        'Recurring payments',
        faDotCircle,
        '/recurring-payments',
        []
      ),
      new SideMenu('Gift cards', faDotCircle, '/gift-cards', []),
      new SideMenu(
        'Shopping carts and wishlists',
        faDotCircle,
        '/shopping-cart-and-wishlists',
        []
      ),
    ]),
    new SideMenu('Customers', faUser, '', [
      new SideMenu('Customers', faDotCircle, '/customers', []),
      new SideMenu('Customer roles', faDotCircle, '/customer-roles', []),
      new SideMenu('Online customers', faDotCircle, '/online-customers', []),
      new SideMenu('Vendors', faDotCircle, '/vendors', []),
      new SideMenu('Activity log', faDotCircle, '/activity-log', []),
      new SideMenu('Activity Types', faDotCircle, '/activity-types', []),
      new SideMenu(
        'GDPR requests (log)',
        faDotCircle,
        '/gdpr-requests-log',
        []
      ),
    ]),
    new SideMenu('Promotions', faTags, '', [
      new SideMenu('Discounts', faDotCircle, '/discounts', []),
      new SideMenu('Affiliates', faDotCircle, '/affiliates', []),
      new SideMenu(
        'Newsletter subscribers',
        faDotCircle,
        '/newsletter-subscribers',
        []
      ),
      new SideMenu('Campaigns', faDotCircle, '/campaigns', []),
    ]),
    new SideMenu('Content Management', faCubes, '', [
      new SideMenu('Topic (pages)', faDotCircle, '/topic-pages', []),
      new SideMenu('Message templates', faDotCircle, '/message-template', []),
      new SideMenu('News items', faDotCircle, '/news-items', []),
      new SideMenu('News comments', faDotCircle, '/news-comments', []),
      new SideMenu('Blog posts', faDotCircle, '/blog-posts', []),
      new SideMenu('Blog comments', faDotCircle, '/blog-comments', []),
      new SideMenu('Polls', faDotCircle, '/polls', []),
      new SideMenu('Forums', faDotCircle, '/forums', []),
    ]),
    new SideMenu('Configuration', faCogs, '', [
      new SideMenu('Settings', faDotCircle, '', [
        new SideMenu('General settings', faDotCircle, '/general-settings', []),
        new SideMenu(
          'Customer settings',
          faDotCircle,
          '/customer-settings',
          []
        ),
        new SideMenu('Order settings', faDotCircle, '/order-settings', []),
        new SideMenu(
          'Shipping settings',
          faDotCircle,
          '/shipping-settings',
          []
        ),
        new SideMenu('Tax settings', faDotCircle, '/tax-settings', []),
        new SideMenu('Catalog settings', faDotCircle, '/catalog-settings', []),
        new SideMenu(
          'Shopping cart settings',
          faDotCircle,
          '/shopping-cart-settings',
          []
        ),
        new SideMenu('Reward points', faDotCircle, '/reward-points', []),
        new SideMenu('Gdpr Settings', faDotCircle, '/gdpr-settings', []),
        new SideMenu('Vendor settings', faDotCircle, '/vendor-settings', []),
        new SideMenu('Blog settings', faDotCircle, '/blog-settings', []),
        new SideMenu('News settings', faDotCircle, '/news-settings', []),
        new SideMenu('Forum settings', faDotCircle, '/forum-settings', []),
        new SideMenu('Media settings', faDotCircle, '/media-settings', []),
        new SideMenu('App settings', faDotCircle, '/app-settings', []),
        new SideMenu(
          'All settings (advanced)',
          faDotCircle,
          '/all-settings-advanced',
          []
        ),
      ]),
      new SideMenu('Email accounts', faDotCircle, '/email-accounts', []),
      new SideMenu('Stores', faDotCircle, '/stores', []),
      new SideMenu('Countries', faDotCircle, '/countries', []),
      new SideMenu('Languages', faDotCircle, '/languages', []),
      new SideMenu('Currencies', faDotCircle, '/currencies', []),
      new SideMenu('Payment methods', faDotCircle, '/payment-methods', []),
      new SideMenu(
        'Payment restrictions',
        faDotCircle,
        '/payment-restrictions',
        []
      ),
      new SideMenu('Tax providers', faDotCircle, '/tax-providers', []),
      new SideMenu('Tax categories', faDotCircle, '/tax-categories', []),
      new SideMenu('Shipping', faDotCircle, '', [
        new SideMenu(
          'Shipping Providers',
          faDotCircle,
          '/shipping-providers',
          []
        ),
        new SideMenu('Warehouses', faDotCircle, '/warehouses', []),
        new SideMenu('Pickup points', faDotCircle, '/pickup-points', []),
        new SideMenu('Dates and ranges', faDotCircle, '/dates-and-ranges', []),
        new SideMenu('Measures', faDotCircle, '/measures', []),
      ]),
      new SideMenu(
        'Access control list',
        faDotCircle,
        '/access-control-list',
        []
      ),
      new SideMenu('Widgets', faDotCircle, '/widgets', []),
      new SideMenu('Authentication', faDotCircle, '', [
        new SideMenu(
          'External authentication',
          faDotCircle,
          '/external-authentication',
          []
        ),
        new SideMenu(
          'Multi-factor authentication',
          faDotCircle,
          '/multi-factor-authentication',
          []
        ),
      ]),
      new SideMenu('Local plugins', faDotCircle, '/local-plugins', []),
      new SideMenu(
        'All plugin and themes',
        faDotCircle,
        '/all-plugin-and-themes',
        []
      ),
    ]),
    new SideMenu('System', faCube, '', [
      new SideMenu(
        'System Information',
        faDotCircle,
        '/system-ifnormation',
        []
      ),
      new SideMenu('Log', faDotCircle, '/log', []),
      new SideMenu('Warnings', faDotCircle, '/warnings', []),
      new SideMenu('Maintenance', faDotCircle, '/maintenance', []),
      new SideMenu('Message Queue', faDotCircle, '/message-queue', []),
      new SideMenu('Schedule tasks', faDotCircle, '/schedule-tasks', []),
      new SideMenu(
        'Search engine friendly page names',
        faDotCircle,
        '/search-engine-friendly-page-names',
        []
      ),
      new SideMenu('Templates', faDotCircle, '/templtes', []),
    ]),
    new SideMenu('Reports', faChartLine, '', [
      new SideMenu('Sales summary', faDotCircle, '/sales-summary-report', []),
      new SideMenu('Low stock', faDotCircle, '/low-stock-report', []),
      new SideMenu('Bestsellers', faDotCircle, '/best-sellers-report', []),
      new SideMenu(
        'Products never purchased',
        faDotCircle,
        '/products-never-purchased-report',
        []
      ),
      new SideMenu('Country Sales', faDotCircle, '/country-sales-report', []),
      new SideMenu('Customer Reports', faDotCircle, '', [
        new SideMenu(
          'Registered customers',
          faDotCircle,
          '/registered-customers-report',
          []
        ),
        new SideMenu(
          'Customer by order total',
          faDotCircle,
          '/customer-by-order-total-report',
          []
        ),
        new SideMenu(
          'Customers by number of orders',
          faDotCircle,
          '/customer-by-number-of-orders-report',
          []
        ),
      ]),
    ]),
    new SideMenu('Help', faQuestionCircle, '', [
      new SideMenu('Help topics', faDotCircle, '/help-topics', []),
      new SideMenu('Community forums', faDotCircle, '/community-forums', []),
      new SideMenu(
        'Premium support services',
        faDotCircle,
        '/premium-support-services',
        []
      ),
    ]),
  ];

  constructor() {}

  ngOnInit(): void {}
}
