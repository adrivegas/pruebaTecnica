import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
  constructor(private moviesService: MoviesService) { }

  movies:any[] = [];
  titulo: string = 'spider';

  ngOnInit(): void {
    this.moviesService.getMovies(this.titulo, '2000')
      .subscribe( movies => this.movies = movies.Search );
      // .subscribe( resp => console.log(resp.Search));
  }

}



