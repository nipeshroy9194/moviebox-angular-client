import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieServiceClient} from '../services/MovieServiceClient';
import {UserServiceClient} from '../services/UserServiceClient';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  popularMovies = [];

  constructor(public router: Router,
              public service: MovieServiceClient,
              public activatedRoute: ActivatedRoute,
              public userAuthentication: UserServiceClient) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.service.getPopularMovies()
        .then(movies => this.popularMovies = movies.results)
        .catch(error => window.alert('The TMDB API is currently down'));
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
