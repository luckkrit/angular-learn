import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../../../admin-service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faCogs = faCogs;
  @Input()
  drawer: MatSidenav;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogout(): void {
    this.authenticationService.logout();
    // window.location.reload();
    this.router.navigate(['/login']);
  }
}
