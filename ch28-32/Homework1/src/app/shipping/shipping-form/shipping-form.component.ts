import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css'],
})
export class ShippingFormComponent implements OnInit {
  shippingForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    postalAddress: ['', Validators.required],
    comment: [''],
  });
  isSubmiited: boolean;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.isSubmiited = true;
  }

  onEditResponse(): void {
    this.isSubmiited = false;
  }
}
