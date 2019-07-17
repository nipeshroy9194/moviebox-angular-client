import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent implements OnInit {

  constructor(private router: Router) { }

  searchParam;

  ngOnInit() {
  }

  getInput(event: any) {
    this.searchParam = event.target.value;
    console.log(this.searchParam);
  }

  searchMovies() {
    this.router.navigate(['home', 'search', this.searchParam]);
  }
}
