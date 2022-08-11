import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { MovieComponent } from './pages/movie/movie.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    BuscarComponent,
    MovieComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MoviesModule { }
