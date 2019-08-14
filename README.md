# WebDev Team 2

`Team Members:`

  1. Nipesh Roy
  2. Kumar Baibhav

### MovieBOX - Rent Movies:
**Deployed Heroku Link** -> https://moviebox-angular-client.herokuapp.com/


`Public API used :`

TMDB(The Movie Database) -> https://www.themoviedb.org/

`API Details:`

The TMDB API is a RESTful web service to obtain movie information.

`API search by string(To get a list of movies based on a search query) -`


https://api.themoviedb.org/3/search/movie?api_key=APIKEY&query='batman'

`API search by ID (To get a particular movie Detail)-`

https://api.themoviedb.org/3/movie/movieId?api_key=APIKEY

### Examples:
`Search by Query String:` 


https://api.themoviedb.org/3/search/movie?api_key={api_key}&query='Jack Reacher'
	
**Query String - 'Jack Reacher'**

This will return a few fields, the one you want to look at is the results field. This is an array and will contain our standard movie list-objects. Here's an example of the first item:
```
ResultSet:
{
"results": [
     {
        "poster_path": "/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg",
        "adult": false,
        "overview": "Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name. On the run as a fugitive from the law, Reacher uncovers a potential secret from his past that could change his life forever.",
        "release_date": "2016-10-19",
        "genre_ids": [
                       53,
                       28,
                       80,
                       18,
                       9648
                     ],
        "id": 343611,
        "original_title": "Jack Reacher: Never Go Back",
        "original_language": "en",
        "title": "Jack Reacher: Never Go Back",
        "backdrop_path": "/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg",
        "popularity": 26.818468,
        "vote_count": 201,
        "video": false,
        "vote_average": 4.19
     }
     .......
   ]
}
```
`Search by ID:` 


https://api.themoviedb.org/3/movie/2287?api_key=d1207a4a21482a40ca0d92409204d7d5
	
**Movie ID - 2287**
```
ResultSet:
{
     {
    "adult": false,
    "backdrop_path": "/xMCL6xXpnWUjqGG1zpRGvnavisQ.jpg",
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
        {
            "id": 99,
            "name": "Documentary"
        }
    ],
    "homepage": null,
    "id": 2287,
    "imdb_id": "tt0436724",
    "original_language": "en",
    "original_title": "Rize",
    "overview": "A documentary film that highlights two street derived dance styles, Clowning and Krumping, that came out of the low income neighborhoods of L.A.. Director David LaChapelle interviews each dance crew about how their unique dances evolved. A new and positive activity away from the drugs, guns, and gangs that ruled their neighborhood. A raw film about a growing sub-culture movements in America.",
    "popularity": 2.616,
    "poster_path": "/cMbgHEmJSSuBsiXgSvaS2489JZe.jpg",
    "production_companies": [
        {
            "id": 1050,
            "logo_path": null,
            "name": "David LaChapelle Studios",
            "origin_country": ""
        },
        {
            "id": 1051,
            "logo_path": null,
            "name": "HSI Productions",
            "origin_country": ""
        },
        {
            "id": 1052,
            "logo_path": null,
            "name": "Darkfibre Entertainment Ltd.",
            "origin_country": ""
        },
        {
            "id": 1053,
            "logo_path": null,
            "name": "Got Films",
            "origin_country": ""
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "2005-01-15",
    "revenue": 0,
    "runtime": 86,
    "spoken_languages": [
        {
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "",
    "title": "Rize",
    "video": false,
    "vote_average": 6.5,
    "vote_count": 17,
   }
}
```
`Find Upcoming Movies: (Get Movie Details)`
 
https://api.themoviedb.org/3/movie/upcoming?api_key=d1207a4a21482a40ca0d92409204d7d5

This will also return a few fields, the one you want to look at is the results field. This is an array and will contain our standard movie list-objects. Here's an example of the first item:
```
ResultSet:
{
    "results": [
        {
            "vote_count": 581,
            "id": 384018,
            "video": false,
            "vote_average": 6.5,
            "title": "Fast & Furious Presents: Hobbs & Shaw",
            "popularity": 456.135,
            "poster_path": "/keym7MPn1icW1wWfzMnW3HeuzWU.jpg",
            "original_language": "en",
            "original_title": "Fast & Furious Presents: Hobbs & Shaw",
            "genre_ids": [
                28
            ],
            "backdrop_path": "/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg",
            "adult": false,
            "overview": "A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham's Deckard Shaw.",
            "release_date": "2019-08-01"
        },
        .......
    ],
}
