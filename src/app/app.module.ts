import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MovieServiceClient, UserServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
