import {Component, OnChanges, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/UserServiceClient';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart = [];

  constructor(private router: Router,
              private userAuthentication: UserServiceClient) { }

  ngOnInit() {
    if (this.userAuthentication.user) {
      if (this.userAuthentication.user.cart) {
        this.cart = this.userAuthentication.user.cart;
      }
    } else {
      window.alert('Service Unavailable : 503');
    }
  }

  returnHome() {
    this.router.navigate(['home']);
  }
}
