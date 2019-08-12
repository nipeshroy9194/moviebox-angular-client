import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {MovieRecentlyRentedComponent} from './movie-recently-rented/movie-recently-rented.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {AdminManageUsersComponent} from './admin-manage-users/admin-manage-users.component';
import {AuthGuardServiceClient} from './services/AuthGuardServiceClient';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MovieHomeComponent},
  {path: 'home', component: MovieRecentlyRentedComponent},
  {path: 'search/', component: MovieHomeComponent},
  {path: 'search/:searchParam', component: MovieHomeComponent},
  {path: 'details/:movieId', component: MovieDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/:userId', component: ProfileComponent},
  {path: 'users', component: AdminManageUsersComponent, canActivate:[AuthGuardServiceClient]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
