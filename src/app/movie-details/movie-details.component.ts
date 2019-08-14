import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieServiceClient} from '../services/MovieServiceClient';
import {EmbedVideoService} from 'ngx-embed-video';
import {UserServiceClient} from '../services/UserServiceClient';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(public router: Router,
              public service: MovieServiceClient,
              public activatedRoute: ActivatedRoute,
              public embedService: EmbedVideoService,
              public userAuthentication: UserServiceClient) {
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

  brokenImage(event) {
    event.target.src = '../assets/images/no_image_available.jpeg';
  }
}
