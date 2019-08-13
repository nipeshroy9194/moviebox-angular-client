import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieServiceClient} from '../services/MovieServiceClient';
import {EmbedVideoService} from 'ngx-embed-video';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private router: Router,
              private service: MovieServiceClient,
              private activatedRoute: ActivatedRoute,
              private embedService: EmbedVideoService) {
  }

  movieId: string;
  movieDetails;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.movieId = params.get('movieId');
      console.log(this.movieId);
      if (this.movieId !== null) {
        this.service.getMovieDetails(params.get('movieId')).
        then(movieDetails => this.movieDetails = movieDetails);
      }
    });
  }

  embedYoutubeLink(youTubeLink) {
    const temp = this.embedService.embed(youTubeLink);
    console.log(temp);
    return temp;
  }

  addToCart(movieDetails) {
  }

  brokenImage(event) {
    event.target.src = '../assets/images/no_image_available.jpeg';
  }
}
