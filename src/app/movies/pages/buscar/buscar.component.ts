import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  titulo: string = '';
  movies:any[] = [];
  movieSeleccionada!:any;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {  
    this.buscando(); 
  }

  buscando() {

    console.log(this.titulo);
    this.moviesService.searchMovie(this.titulo)
      .subscribe( movies => this.movies = movies.Search );

  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

    // if(!event.option.value) {
    //   this.movieSeleccionada = undefined;
    //   return;
    // }

    const movie = event.option.value;
    this.titulo = movie.Title;

    console.log(movie.Title);

    this.moviesService.getMoviePorId( movie.imdbID! )
      .subscribe( movie => this.movieSeleccionada = movie );
  }



}
