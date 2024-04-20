// movies-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindcitymoviesComponent } from './findcitymovies/findcitymovies.component';
import { FilterMoviesComponent } from './filtermovies/filtermovies.component';




const routes: Routes = [ { path: 'moviecity',component: FindcitymoviesComponent  },
{ path: 'moviefilter',component: FilterMoviesComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
