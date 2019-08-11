import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
  constructor(private router: Router) { }

  navbarCollapsed = true;
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
