import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isUserLoggedIn = false;

  login(userName: string, password: string): Observable<boolean> {
    console.log(userName);
    console.log(password);
    this.isUserLoggedIn = userName === 'admin' && password === 'admin';
    localStorage.setItem(
      'isUserLoggedIn',
      this.isUserLoggedIn ? 'true' : 'false'
    );

    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap((val) => {
        console.log('Is User Authentication is successful: ' + val);
      })
    );
  }

  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }
  getLoginStatus(): boolean {
    const storeData = localStorage.getItem('isUserLoggedIn');
    if (storeData) {
      this.isUserLoggedIn = true;
      return this.isUserLoggedIn;
    }
    this.isUserLoggedIn = false;
    return this.isUserLoggedIn;
  }

  constructor() {}
}
