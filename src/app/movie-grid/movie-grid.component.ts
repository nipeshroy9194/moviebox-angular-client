import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieServiceClient} from '../services/MovieServiceClient';
import {UserServiceClient} from '../services/UserServiceClient';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.css']
})
export class MovieGridComponent implements OnInit {

  constructor(public router: Router,
              public service: MovieServiceClient,
              public activatedRoute: ActivatedRoute,
              public userAuthentication: UserServiceClient) {
  }

  searchParam: string;
  movies = [];

  ngOnInit() {
    this.movies = [];
    this.activatedRoute.paramMap.subscribe(params => {
      this.searchParam = params.get('searchParam');
      if (this.searchParam !== null) {
        this.service.getSearchMovies(params.get('searchParam'))
          .then(movies => this.movies = movies.results)
          .catch(error => window.alert('The TMDB API is currently down'));
      }
    });
  }

  showDetails(movieId) {
    this.router.navigate(['details', movieId]);
  }

  brokenImage(event) {
    event.target.src = '../assets/images/no_image_available.jpeg';
  }

  addToCart(movie) {
    if (this.userAuthentication.user !== null) {
      const movieId = {
        movieId: movie.id,
        name: movie.title,
        posterUrl: movie.poster_path
      };
      this.userAuthentication.addToCart(this.userAuthentication.user._id, movieId).then(res => {
        if (res.message === undefined) {
          this.userAuthentication.findUserById(this.userAuthentication.user._id).then(response => {
            this.userAuthentication.user = response;
            window.localStorage.setItem('user', JSON.stringify(this.userAuthentication.user));
          });
          window.alert('Movie Added Successfully to Cart');
        } else {
          window.alert(res.message);
        }
      });
    } else {
      window.alert('You need to Login to Add a Movie to Cart');
    }
  }
}
