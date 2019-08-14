import {Injectable} from '@angular/core';
import {AppGlobals} from './AppGlobals';

@Injectable()
export class UserServiceClient {
  user = null;

  constructor(private global: AppGlobals) {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  login = (loginCredentials) =>
    fetch(`${this.global.baseNodeUrl}` + 'api/user-login', {
      method: 'POST',
      body: JSON.stringify(loginCredentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json(), error => error.status)

  findUserById = (userId) =>
    fetch(`${this.global.baseNodeUrl}` + 'api/user/' + `${userId}`,
      {
        credentials: 'include'
      })
      .then(response => response.json(), error => error.status)

  userLogout = () =>
    fetch(`${this.global.baseNodeUrl}` + 'api/user-logout',
      {
        credentials: 'include'
      })
      .then(response => response.status, error => error.status)

  updateUser = (userId, updatedUser) =>
    fetch(`${this.global.baseNodeUrl}` + 'api/user/' + `${userId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedUser),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.status, error => error.status)

  createUser = (newUser) =>
    fetch(`${this.global.baseNodeUrl}` + 'api/users', {
      method: 'POST',
      body: JSON.stringify(newUser),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json(), error => error.status)

  findAllUsers = () =>
    fetch(`${this.global.baseNodeUrl}` + 'api/users', {
      credentials: 'include',
    }).then(response => response.json(), error => error.status)

  deleteUser = (userId) =>
    fetch(`${this.global.baseNodeUrl}` + 'api/user/' + `${userId}`, {
      method: 'DELETE',
      credentials: 'include',
    }).then(response => response.status, error => error.status)

  addToCart = (userId, movieId) =>
    fetch(`${this.global.baseNodeUrl}` + 'api/user/' + `${userId}` + '/cart', {
      method: 'PUT',
      body: JSON.stringify(movieId),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.status, error => error.status)

  deleteFromCart = (userId, movieId) =>
    fetch(`${this.global.baseNodeUrl}` + 'api/user/' + `${userId}` + '/cart/' + `${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
    }).then(response => response.status, error => error.status)

  deleteAllFromCart = (userId) =>
    fetch(`${this.global.baseNodeUrl}` + 'api/user/' + `${userId}` + '/cart', {
      method: 'DELETE',
      credentials: 'include',
    }).then(response => response.status, error => error.status)

  checkout = (userId) =>
    fetch(`${this.global.baseNodeUrl}` + 'api/user/' + `${userId}` + '/checkout', {
      credentials: 'include',
    }).then(response => response.status, error => error.status)

}
