import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../admin-service/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string): true | UrlTree {
    console.log('Url: ' + url);
    const val: string = localStorage.getItem('isUserLoggedIn');

    if (val != null && val === 'true') {
      if (url === '/login') {
        this.router.parseUrl('/admin');
      } else {
        return true;
      }
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
