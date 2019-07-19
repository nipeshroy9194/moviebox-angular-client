# WebDev Team 2

`Team Members:`

  1. Nipesh Roy
  2. Kumar Baibhav

### MovieBOX - Rent Movies:
**Deployed Heroku Link** -> https://moviebox-angular-client.herokuapp.com/


`Public API used :`

OMDB(The Open Movie Database) -> https://www.omdbapi.com

`API Details:`

The OMDb API is a RESTful web service to obtain movie information.

`API search by string(To get a list of movies based on a search query) -`


https://www.omdbapi.com/?s=searchString&apikey=APIKEY

`API search by ID (To get a particular movie Detail)-`


https://www.omdbapi.com/?i=movieId&apikey=APIKEY

### Examples:
`Search by Query String:` 


https://www.omdbapi.com/?s=batman&apikey=2d21f860
	
**Query String - 'batman'**
```
  ResultSet:
    {
      "Search":[
        {
          "Title":"Batman Begins",
          "Year":"2005",
          "imdbID":"tt0372784",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"},
        {
          "Title":"Batman v Superman: Dawn of Justice",
          "Year":"2016",
          "imdbID":"tt2975590",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},
        {
          "Title":"Batman",
          "Year":"1989",
          "imdbID":"tt0096895",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"},
        {
          "Title":"Batman Returns",
          "Year":"1992",
          "imdbID":"tt0103776",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"},
        {
          "Title":"Batman Forever",
          "Year":"1995",
          "imdbID":"tt0112462",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},
        {
          "Title":"Batman & Robin",
          "Year":"1997",
          "imdbID":"tt0118688",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"},
        {
          "Title":"The Lego Batman Movie",
          "Year":"2017",
          "imdbID":"tt4116284",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"},
        {
          "Title":"Batman: The Animated Series",
          "Year":"1992–1995",
          "imdbID":"tt0103359",
          "Type":"series",
          "Poster":"https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"},
        {
          "Title":"Batman: Under the Red Hood",
          "Year":"2010",
          "imdbID":"tt1569923",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BYTdlODI0YTYtNjk5ZS00YzZjLTllZjktYmYzNWM4NmI5MmMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"},
        {
          "Title":"Batman: The Dark Knight Returns, Part 1",
          "Year":"2012",
          "imdbID":"tt2313197",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"
        }
      ],
      "totalResults":"366",
      "Response":"True"
    }
```
`Search By ID: (Get Movie Details)`
 
 
 https://www.omdbapi.com/?i=tt0372784&apikey=2d21f860
```
  ResultSet:
    {
      "Title":"Batman Begins",
      "Year":"2005",
      "Rated":"PG-13",
      "Released":"15 Jun 2005",
      "Runtime":"140 min",
      "Genre":"Action, Adventure",
      "Director":"Christopher Nolan",
      "Writer":"Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors":"Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot":"After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
      "Language":"English, Urdu, Mandarin",
      "Country":"USA, UK",
      "Awards":"Nominated for 1 Oscar. Another 14 wins & 72 nominations.",
      "Poster":"https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
      "Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},
             {"Source":"Rotten Tomatoes","Value":"84%"},
             {"Source":"Metacritic","Value":"70/100"}],
      "Metascore":"70",
      "imdbRating":"8.2",
      "imdbVotes":"1,200,605",
      "imdbID":"tt0372784",
      "Type":"movie",
      "DVD":"18 Oct 2005",
      "BoxOffice":"$204,100,000",
      "Production":"Warner Bros. Pictures",
      "Website":"https://www.warnerbros.com/batman-begins",
      "Response":"True"
    }
```
# ProjectSu19WebdevTeam2AngularClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
