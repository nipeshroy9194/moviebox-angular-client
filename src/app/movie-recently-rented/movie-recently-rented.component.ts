import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MovieServiceClient} from '../services/MovieServiceClient';
import {UserServiceClient} from '../services/UserServiceClient';

@Component({
  selector: 'app-movie-recently-rented',
  templateUrl: './movie-recently-rented.component.html',
  styleUrls: ['./movie-recently-rented.component.css']
})
export class MovieRecentlyRentedComponent implements OnInit {

  constructor(private router: Router,
              private service: MovieServiceClient,
              private userAuthentication: UserServiceClient) {
  }

  recentlyRentedMovies: any = [];

  ngOnInit() {
    this.recentlyRentedMovies = [];
    // Replace this to get info of the Recently rented movieId's from the database
    if (this.userAuthentication.user !== null) {
      this.service.getRecentlyRented(this.userAuthentication.user._id)
        .then(movies => {
          if (movies.message === undefined) {
            this.recentlyRentedMovies = movies;
          } else {
            this.recentlyRentedMovies = [];
          }
        })
        .catch(error => window.alert('The TMDB API is currently down'));
    }
  }

  brokenImage(event) {
    event.target.src = '../assets/images/no_image_available.jpeg';
  }

  showDetails(movieId) {
    this.router.navigate(['details', movieId]);
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
