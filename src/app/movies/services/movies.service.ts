import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl: string = 'http://www.omdbapi.com/'
  private apikey: string = 'd38cc623';

  constructor( private http: HttpClient) { }

  getMovies(titulo:string, year:string ):Observable<any>{
    // return this.http.get('http://www.omdbapi.com/?s=Batman&page=2&?&apikey=d38cc623')
    const movies =  this.http.get(`${this.apiUrl}?apikey=${this.apikey}&s=${titulo}&y=${year}`);
    return movies;
  }

  searchMovie(titulo:string):Observable<any>{
    // const url = `${this.apiUrl}${titulo}&apikey=${this.apikey}`;
    const movie = this.http.get(`${this.apiUrl}?apikey=${this.apikey}&s=${titulo}`);
    return movie;
  }
}
