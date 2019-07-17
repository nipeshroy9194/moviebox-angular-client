import { Injectable } from '@angular/core';
@Injectable()
export class MovieServiceClient {
  getSearchMovies = (searchParam) =>
    fetch(' http://www.omdbapi.com/?s=' + `${searchParam}` + '&apikey=2d21f860').then(response => response.json())
}
