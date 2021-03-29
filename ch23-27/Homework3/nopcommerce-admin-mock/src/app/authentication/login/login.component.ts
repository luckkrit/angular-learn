import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../admin-service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName = 'admin';
  password = 'admin';
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authenticationService
      .login(this.userName, this.password)
      .subscribe((data) => {
        console.log('Is Login Success: ' + data);

        if (data) {
          this.router.navigate(['/admin']);
        }
      });
  }
}
