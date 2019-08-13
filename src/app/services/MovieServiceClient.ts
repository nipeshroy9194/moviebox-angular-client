import { Injectable } from '@angular/core';
@Injectable()
export class MovieServiceClient {
  getSearchMovies = (searchParam) =>
    fetch('http://localhost:3000/api/searchMovie/' + `${searchParam}`, {
      credentials: 'include',
    }).then(response => response.json())

  getMovieDetails = (movieId) =>
    fetch('http://localhost:3000/api/movie-detail/' + `${movieId}`, {
      credentials: 'include',
    }).then(response => response.json())

  getNewReleases = () =>
    fetch('http://localhost:3000/api/movie-new-releases/', {
      credentials: 'include',
    }).then(response => response.json())

  getPopularMovies = () =>
    fetch('http://localhost:3000/api/popular-movies/', {
      credentials: 'include',
    }).then(response => response.json())

}
