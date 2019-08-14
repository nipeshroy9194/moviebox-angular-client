import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieServiceClient} from '../services/MovieServiceClient';
import {UserServiceClient} from '../services/UserServiceClient';

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css']
})
export class ShowMoviesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
