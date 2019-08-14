import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserServiceClient} from './UserServiceClient';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardServiceClient implements CanActivate {

  constructor(private router: Router,
              private authService: UserServiceClient) {}

  canActivate() {
    if (this.authService.user.type === 'ADMIN') {
      return true;
    } else {
      window.alert('Operation can only be performed by admin');
      this.router.navigate(['home']);
      return false;
    }
  }
}
