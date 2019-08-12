import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../services/UserServiceClient';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userAuthentication: UserServiceClient) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const loginCredentials = {
      userName: this.f.username.value,
      password: this.f.password.value
    };

    this.userAuthentication.login(loginCredentials).then(res => {
      this.userAuthentication.user = res;
      this.router.navigate(['profile', this.userAuthentication.user.userId]);
    }).catch(error => {
      window.alert('Invalid username/password');
      this.loginForm.reset();
    });
  }
}
