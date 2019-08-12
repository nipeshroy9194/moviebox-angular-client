import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../services/UserServiceClient';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId;
  currentUser;

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private userAuthentication: UserServiceClient) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = params.get('userId');
      this.userAuthentication.findUserById(this.userId).then(response => {
        this.userAuthentication.user = response;
        this.currentUser = response;
      });
    });
  }
}
