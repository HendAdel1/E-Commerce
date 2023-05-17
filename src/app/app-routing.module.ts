import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: "", //default route
    component: MoviesListComponent
  },
  {
    path: "movie-details/:id",
    component: MovieDetailsComponent
  },
  {
    path: "form",
    component: FormComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
