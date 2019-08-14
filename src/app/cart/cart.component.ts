import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/UserServiceClient';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart = [];

  constructor(public router: Router,
              public userAuthentication: UserServiceClient) { }

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

  brokenImage(event) {
    event.target.src = '../assets/images/no_image_available.jpeg';
    event.target.style.width = '100px';
    event.target.style.height = '100px';
  }

  deleteItem(movie) {
    this.userAuthentication.deleteFromCart(this.userAuthentication.user._id, movie.movieId)
      .then(res => {
        if (res.message === undefined) {
          this.userAuthentication.findUserById(this.userAuthentication.user._id).then(response => {
            this.userAuthentication.user = response;
            this.cart = this.userAuthentication.user.cart;
            window.localStorage.setItem('user', JSON.stringify(this.userAuthentication.user));
          });
          window.alert('Item Deleted From Cart');
        } else {
          window.alert('You need to Login to Delete a Movie From Cart');
          this.router.navigate(['login']);
        }
      });
  }

  clearCart() {
    this.userAuthentication.deleteAllFromCart(this.userAuthentication.user._id)
      .then(res => {
        if (res.message === undefined) {
          this.userAuthentication.findUserById(this.userAuthentication.user._id).then(response => {
            this.userAuthentication.user = response;
            this.cart = this.userAuthentication.user.cart;
            window.localStorage.setItem('user', JSON.stringify(this.userAuthentication.user));
          });
          window.alert('All Items Deleted From Cart Successfully');
        } else {
          window.alert('You need to Login to Empty Cart');
          this.router.navigate(['login']);
        }
      });
  }

  checkout() {
    this.userAuthentication.checkout(this.userAuthentication.user._id)
      .then(res => {
        if (res.message === undefined) {
          this.userAuthentication.findUserById(this.userAuthentication.user._id).then(response => {
            this.userAuthentication.user = response;
            this.cart = this.userAuthentication.user.cart;
            window.localStorage.setItem('user', JSON.stringify(this.userAuthentication.user));
          });
          window.alert('Order Placed Successfully. Check your recently Rented Section in HomePage');
        } else {
          window.alert(res.message);
          this.router.navigate(['login']);
        }
      });
  }
}
