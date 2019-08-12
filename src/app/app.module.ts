import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieServiceClient } from './services/MovieServiceClient';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieRecentlyRentedComponent } from './movie-recently-rented/movie-recently-rented.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserServiceClient } from './services/UserServiceClient';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardServiceClient } from './services/AuthGuardServiceClient';
import { AdminManageUsersComponent } from './admin-manage-users/admin-manage-users.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieHomeComponent,
    MovieGridComponent,
    MovieDetailsComponent,
    MovieRecentlyRentedComponent,
    NavigationbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminManageUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ShowHidePasswordModule
  ],
  providers: [MovieServiceClient, UserServiceClient, AuthGuardServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
