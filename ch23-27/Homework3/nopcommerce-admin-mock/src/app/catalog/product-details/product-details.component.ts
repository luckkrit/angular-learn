import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: string;
  constructor(private route: ActivatedRoute) {
    this.productId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {}
}
