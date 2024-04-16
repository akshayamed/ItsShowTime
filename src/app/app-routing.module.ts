import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import path from 'path';
import { MainComponent } from './homepage/main/main.component';


const routes: Routes = [
  {
    path:'',
    component:MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
