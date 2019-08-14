import {Component, OnInit} from '@angular/core';
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

  constructor(public router: Router,
              public userAuthentication: UserServiceClient) {
  }

  ngOnInit() {
    this.userAuthentication.findAllUsers().then(res => {
      if (res.message !== undefined) {
        if (res.message === 'Not a admin user') {
          window.alert(res.message);
          this.router.navigate(['home']);
        } else {
          window.alert(res.message);
          this.router.navigate(['login']);
        }
      } else {
        this.allUsers = res;
      }
    });
  }

  deleteUser(userId) {
    this.userAuthentication.deleteUser(userId).then(res => {
      window.alert('User Deleted Successfully');
      this.userAuthentication.findAllUsers().then(response => {
        this.allUsers = response;
      }).catch(error => window.alert('Unable to Find all Users'));
    }).catch(error => {
        window.alert('Unable to delete user successfully');
    });
  }
}
