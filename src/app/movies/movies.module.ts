// movies.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { FindcitymoviesComponent } from './findcitymovies/findcitymovies.component';

import { FormsModule } from '@angular/forms';
import { FilterMoviesComponent } from './filtermovies/filtermovies.component';








@NgModule({
  declarations: [
    FindcitymoviesComponent,
FilterMoviesComponent

    
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule
  
  ],
  exports:[
    FindcitymoviesComponent,
FilterMoviesComponent
  ]
})
export class MoviesModule { }
