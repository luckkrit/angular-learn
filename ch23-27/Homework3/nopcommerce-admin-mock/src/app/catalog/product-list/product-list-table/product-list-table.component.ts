import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductListTableDataSource } from './product-list-table-datasource';
import { Product } from '../../../models/product';
import { ProductService } from '../../../admin-service/product.service';

@Component({
  selector: 'app-product-list-table',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list-table.component.css'],
})
export class ProductListTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Product>;
  dataSource: ProductListTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'picture',
    'productName',
    'sku',
    'price',
    'quantity',
    'edit',
  ];

  constructor(private productService: ProductService) {
    this.dataSource = new ProductListTableDataSource(this.productService);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
