import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  titulo: string = 'women';

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    console.log(this.titulo);
    this.moviesService.searchMovie(this.titulo)
      .subscribe( resp => {
        console.log(resp);
      });
  }

}
