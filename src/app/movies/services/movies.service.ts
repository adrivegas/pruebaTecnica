import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl: string = 'http://www.omdbapi.com/?s='
  private apikey: string = 'd38cc623';

  constructor( private http: HttpClient) { }

  getMovies() {
    return this.http.get('http://www.omdbapi.com/?s=Batman&page=2&?&apikey=d38cc623')
  }

  searchMovie(titulo:string):Observable<any>{
    const url = `${this.apiUrl}${titulo}&apikey=${this.apikey}`;
    return this.http.get(url);
  }
}
