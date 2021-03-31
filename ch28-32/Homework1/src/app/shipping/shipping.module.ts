import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShippingFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ShippingModule {}
