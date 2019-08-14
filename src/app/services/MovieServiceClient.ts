import { Injectable } from '@angular/core';
import {AppGlobals} from './AppGlobals';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceClient {
  constructor(private global: AppGlobals) {
  }

  getSearchMovies = (searchParam) =>
    fetch(`${this.global.baseNodeUrl}` + 'api/searchMovie/' + `${searchParam}`, {
      credentials: 'include',
    }).then(response => response.json())

  getMovieDetails = (movieId) =>
    fetch(`${this.global.baseNodeUrl}` + 'api/movie-detail/' + `${movieId}`, {
      credentials: 'include',
    }).then(response => response.json())

  getNewReleases = () =>
    fetch(`${this.global.baseNodeUrl}` + 'api/movie-new-releases/', {
      credentials: 'include',
    }).then(response => response.json())

  getPopularMovies = () =>
    fetch(`${this.global.baseNodeUrl}` + 'api/popular-movies/', {
      credentials: 'include',
    }).then(response => response.json())

  getRecentlyRented = (userId) =>
    fetch(`${this.global.baseNodeUrl}` + 'api/user/' + `${userId}` + '/recent', {
      credentials: 'include',
    }).then(response => response.json(), error => error.status)
}
