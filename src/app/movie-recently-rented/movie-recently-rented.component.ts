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

  constructor(public router: Router,
              public service: MovieServiceClient,
              public userAuthentication: UserServiceClient) {
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
}
