import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/UserServiceClient';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
  navbarCollapsed = true;
  searchParam = '';

  constructor(private router: Router,
              private userAuthentication: UserServiceClient) { }

  ngOnInit() {
  }

  getInput(event: any) {
    this.searchParam = event.target.value;
    console.log(this.searchParam);
  }

  searchMovies() {
    if (this.searchParam !== '') {
      this.router.navigate(['search', this.searchParam]);
    } else {
      this.router.navigate(['search']);
    }
  }

  gotoProfile() {
    this.router.navigate(['profile', this.userAuthentication.user.userId]);
  }

  userLogout() {
    this.userAuthentication.userLogout().then(res => {
      this.userAuthentication.user = null;
      console.log(this.userAuthentication.user);
      this.router.navigate(['home']);
    }).catch(error => {
      window.alert('Unable to Logout Successfully');
    });
  }
}
