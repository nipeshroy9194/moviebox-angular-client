import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserServiceClient} from './UserServiceClient';

@Injectable()
export class AuthGuardServiceClient implements CanActivate {

  constructor(private router: Router,
              private authService: UserServiceClient) {}

  canActivate() {
    if (this.authService.user) {
      return true;
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }
}
