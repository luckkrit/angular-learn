import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../../admin-service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../admin-models/product';

@Component({
  selector: 'app-product-details-form',
  templateUrl: './product-details-form.component.html',
  styleUrls: ['./product-details-form.component.css'],
})
export class ProductDetailsFormComponent implements OnInit {
  productForm = this.fb.group({
    productName: ['', Validators.required],
    sku: ['', Validators.required],
    price: [0, Validators.required],
    quantity: [
      0,
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),
    ],
  });
  @Input()
  productId: string;
  product: Product;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  onSubmit(): void {
    console.log(this.productForm.value);
    const product = new Product(
      parseInt(this.productId, 10),
      this.productForm.value.productName,
      this.product.picture,
      this.productForm.value.sku,
      this.productForm.value.price,
      this.productForm.value.quantity
    );
    this.productService.updateProduct(product);
    this.router.navigate(['/products']);
  }

  ngOnInit(): void {
    if (this.productId) {
      this.product = this.productService.getProductById(this.productId);
      this.productForm.patchValue(this.product);
    }
  }
}
