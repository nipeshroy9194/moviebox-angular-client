import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {MovieRecentlyRentedComponent} from './movie-recently-rented/movie-recently-rented.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MovieHomeComponent},
  {path: 'home', component: MovieRecentlyRentedComponent},
  {path: 'home/search/:searchParam', component: MovieHomeComponent},
  {path: 'home/:movieId/details', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
