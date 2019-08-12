import { Injectable } from '@angular/core';
@Injectable()
export class UserServiceClient {
  user;

  login = (loginCredentials) =>
    fetch(' http://localhost:3000/api/user-login', {
      method: 'POST',
      body: JSON.stringify(loginCredentials),
      headers : {
        'content-type': 'application/json'
      }}).then(response => response.json(), error => error.status)

  findUserById = (userId) =>
    fetch('http://localhost:3000/api/user/' + `${userId}`)
      .then(response => response.json(), error => error.status)
}
