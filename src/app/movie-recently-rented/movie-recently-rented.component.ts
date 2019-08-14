import { Component, OnInit } from '@angular/core';
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
              private userAuthentication: UserServiceClient) { }

  recentlyRentedMovies;

  ngOnInit() {
    // Replace this to get info of the Recently rented movieId's from the database
    this.service.getSearchMovies('superman')
      .then(movies => this.recentlyRentedMovies = movies.results)
      .catch(error => window.alert('The TMDB API is currently down'));
  }

  brokenImage(event) {
    event.target.src = '../assets/images/no_image_available.jpeg';
  }

  showDetails(movieId) {
    this.router.navigate(['details', movieId]);
  }

  addToCart(movie) {
    const movieId = {
      movieId: movie.id
    };
    this.userAuthentication.addToCart(this.userAuthentication.user._id, movieId).then(res => {
      this.userAuthentication.findUserById(this.userAuthentication.user._id).then(response => {
        this.userAuthentication.user = response;
        window.localStorage.setItem('user', JSON.stringify(this.userAuthentication.user));
      });
      window.alert('Movie Added Successfully to Cart');
    });
  }
}
