import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  titulo: string = '';
  movies:any[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {  
    this.buscando(); 
  }

  buscando() {

    console.log(this.titulo);
    this.moviesService.searchMovie(this.titulo)
      .subscribe( movies => this.movies = movies.Search );

  }



}
