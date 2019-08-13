import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieServiceClient} from '../services/MovieServiceClient';

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css']
})
export class ShowMoviesComponent implements OnInit {
  upcomingMovies: [];
  popularMovies: [];

  constructor(private router: Router,
              private service: MovieServiceClient,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.service.getNewReleases()
        .then(movies => this.upcomingMovies = movies.results)
        .catch(error => window.alert('The TMDB API is currently down'));
    });
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
}
