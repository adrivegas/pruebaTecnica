import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient) { }

  getMovies() {
    return this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=d38cc623')
  }
}
