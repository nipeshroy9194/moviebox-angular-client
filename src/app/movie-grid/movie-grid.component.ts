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

  constructor(private router: Router,
              private service: MovieServiceClient,
              private activatedRoute: ActivatedRoute,
              private userAuthentication: UserServiceClient) { }

  searchParam: string;
  movies: [];

  ngOnInit() {
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
