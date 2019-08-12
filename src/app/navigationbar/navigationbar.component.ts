import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
  navbarCollapsed = true;
  searchParam = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getInput(event: any) {
    this.searchParam = event.target.value;
    console.log(this.searchParam);
  }

  searchMovies() {
    if (this.searchParam !== '') {
      this.router.navigate(['search', this.searchParam]);
    } else {
      this.router.navigate(['search']);
    }
  }
}
