import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  profileForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private userAuthentication: UserServiceClient) {
  }

  get formget() { return this.profileForm.controls; }

  formset(currentUser) {
    this.profileForm.setValue({
      username: currentUser.userName,
      password: currentUser.password,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = params.get('userId');
      this.userAuthentication.findUserById(this.userId).then(response => {
        this.userAuthentication.user = response;
        window.localStorage.setItem('user', JSON.stringify(this.userAuthentication.user));
        this.currentUser = response;
        this.formset(this.currentUser);
      });
    });
    this.profileForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.profileForm.invalid) {
      return;
    }

    if (this.currentUser.password !== this.formget.password.value ||
      this.currentUser.firstName !== this.formget.firstName.value ||
      this.currentUser.lastName !== this.formget.lastName.value) {
      const updateUser = {
        userName: this.formget.username.value,
        password: this.formget.password.value,
        firstName: this.formget.firstName.value,
        lastName: this.formget.lastName.value,
        type: this.userAuthentication.user.type
      };

      this.userAuthentication.updateUser(this.userId, updateUser).then(res => {
        this.userAuthentication.findUserById(this.userId).then(response => {
          this.userAuthentication.user = response;
          window.localStorage.setItem('user', JSON.stringify(this.userAuthentication.user));
          this.currentUser = this.userAuthentication.user;
          this.router.navigate(['profile', this.userId]);
          window.alert('Profile updated successfully');
        });
      }).catch(error => {
        window.alert('Unable to update prcfile successfully');
      });
    } else {
      window.alert('Please Changes some Profile value to update');
    }
  }
}
