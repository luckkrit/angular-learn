import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './authentication.service';
import { ProductService } from './product.service';

@NgModule({
  declarations: [],
  providers: [AuthenticationService, ProductService],
  imports: [CommonModule],
})
export class AdminServiceModule {}
