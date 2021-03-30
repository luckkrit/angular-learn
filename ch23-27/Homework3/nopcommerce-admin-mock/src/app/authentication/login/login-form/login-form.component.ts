import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../admin-service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  username = 'admin';
  password = 'admin';
  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.authenticationService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe((data) => {
        console.log('Is Login Success: ' + data);

        if (data) {
          this.router.navigate(['/admin']);
        }
      });
  }

  ngOnInit(): void {
    this.loginForm.patchValue({
      username: this.username,
      password: this.password,
    });
  }
}
