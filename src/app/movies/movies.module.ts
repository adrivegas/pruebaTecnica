import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MoviesRoutingModule } from './movies-routing.module';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { MovieComponent } from './pages/movie/movie.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    BuscarComponent,
    MovieComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
