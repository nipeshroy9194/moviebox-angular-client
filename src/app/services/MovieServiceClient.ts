import { Injectable } from '@angular/core';
@Injectable()
export class MovieServiceClient {
  getSearchMovies = (searchParam) =>
    fetch(' https://www.omdbapi.com/?s=' + `${searchParam}` + '&apikey=2d21f860').then(response => response.json())
  getMovieDetails = (movieId) =>
    fetch(' https://www.omdbapi.com/?i=' + `${movieId}` + '&apikey=2d21f860').then(response => response.json())
}
