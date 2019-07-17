import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieServiceClient } from './services/MovieServiceClient';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { MovieGridComponent } from './movie-grid/movie-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieHomeComponent,
    MovieGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MovieServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
