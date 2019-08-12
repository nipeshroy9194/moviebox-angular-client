import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieServiceClient} from '../services/MovieServiceClient';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.css']
})
export class MovieGridComponent implements OnInit {

  constructor(private router: Router,
              private service: MovieServiceClient,
              private activatedRoute: ActivatedRoute) { }

  searchParam: string;
  movies: [];

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.searchParam = params.get('searchParam');
      if (this.searchParam !== null) {
        this.service.getSearchMovies(params.get('searchParam')).then(movies => this.movies = movies.Search);
        console.log(this.movies);
      }
    });
  }

  showDetails(movieId) {
    this.router.navigate(['details', movieId]);
  }

  brokenImage(event) {
    event.target.src = '../assets/images/no_image_available.jpeg';
  }
}
