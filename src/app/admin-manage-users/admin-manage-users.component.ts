import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MovieServiceClient} from '../services/MovieServiceClient';
import {UserServiceClient} from '../services/UserServiceClient';

@Component({
  selector: 'app-admin-manage-users',
  templateUrl: './admin-manage-users.component.html',
  styleUrls: ['./admin-manage-users.component.css']
})
export class AdminManageUsersComponent implements OnInit {

  allUsers;

  constructor(private router: Router,
              private userAuthentication: UserServiceClient) { }

  ngOnInit() {
    this.userAuthentication.findAllUsers().then(res => {
      this.allUsers = res;
    }).catch(error => window.alert('Unable to Find all Users'));
  }

  deleteUser(userId) {

  }
}
