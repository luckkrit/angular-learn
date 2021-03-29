import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../admin-service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  isLogin: boolean;
  ngOnInit(): void {
    if (this.authenticationService.getLoginStatus()) {
      this.isLogin = true;
      this.router.navigate(['/dashboard']);
      console.log('login');
    } else {
      this.isLogin = false;
      console.log('not login');
    }
  }
}
