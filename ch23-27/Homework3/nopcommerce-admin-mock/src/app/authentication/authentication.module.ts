import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminServiceModule } from '../admin-service/admin-service.module';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [CommonModule],
  providers: [],
  exports: [LoginComponent, LogoutComponent],
})
export class AuthenticationModule {}
