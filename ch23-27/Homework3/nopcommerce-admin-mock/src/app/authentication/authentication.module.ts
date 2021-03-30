import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MaterialModule } from '../material/material.module';
import { LoginFormComponent } from './login/login-form/login-form.component';

@NgModule({
  declarations: [LoginComponent, LogoutComponent, LoginFormComponent],
  imports: [CommonModule, MaterialModule],
  providers: [],
  exports: [LoginComponent, LogoutComponent],
})
export class AuthenticationModule {}
