import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
import { SafePipe } from './safe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { ShowMoviesComponent } from './show-movies/show-movies.component';
import { CartComponent } from './cart/cart.component';
import { AppGlobals } from './services/AppGlobals';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';

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
    AdminManageUsersComponent,
    SafePipe,
    ShowMoviesComponent,
    CartComponent,
    PopularMoviesComponent,
    UpcomingMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ShowHidePasswordModule,
    HttpClientModule,
    EmbedVideo,
    FontAwesomeModule
  ],
  providers: [MovieServiceClient, UserServiceClient, AuthGuardServiceClient, AppGlobals],
  bootstrap: [AppComponent]
})
export class AppModule { }
