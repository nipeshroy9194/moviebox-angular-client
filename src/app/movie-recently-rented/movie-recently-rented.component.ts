import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MovieServiceClient} from '../services/MovieServiceClient';

@Component({
  selector: 'app-movie-recently-rented',
  templateUrl: './movie-recently-rented.component.html',
  styleUrls: ['./movie-recently-rented.component.css']
})
export class MovieRecentlyRentedComponent implements OnInit {

  constructor(private router: Router, private service: MovieServiceClient) { }

  recentlyRentedMovies;

  ngOnInit() {
    // Replace this to get info of the Recently rented movieId's from the database
    this.service.getSearchMovies('superman').then(movies => this.recentlyRentedMovies = movies.Search);
  }

  brokenImage(event) {
    event.target.src = '../assets/images/no_image_available.jpeg';
  }

  showDetails(movieId) {
    this.router.navigate(['details', movieId]);
  }
}
