import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {
  user = null;

  constructor() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  login = (loginCredentials) =>
    fetch(' http://localhost:3000/api/user-login', {
      method: 'POST',
      body: JSON.stringify(loginCredentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json(), error => error.status)

  findUserById = (userId) =>
    fetch('http://localhost:3000/api/user/' + `${userId}`,
      {
        credentials: 'include'
      })
      .then(response => response.json(), error => error.status)

  userLogout = () =>
    fetch('http://localhost:3000/api/user-logout',
      {
        credentials: 'include'
      })
      .then(response => response.status, error => error.status)

  updateUser = (userId, updatedUser) =>
    fetch('http://localhost:3000/api/user/' + `${userId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedUser),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.status, error => error.status)

  createUser = (newUser) =>
    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify(newUser),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json(), error => error.status)

  findAllUsers = () =>
    fetch('http://localhost:3000/api/users', {
      credentials: 'include',
    }).then(response => response.json(), error => error.status)

  deleteUser = (userId) =>
    fetch('http://localhost:3000/api/user/' + `${userId}`, {
      method: 'DELETE',
      credentials: 'include',
    }).then(response => response.status, error => error.status)
}
