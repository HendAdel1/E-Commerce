import { Component } from '@angular/core';

import movies from '../../assets/products-list.json';
import { Movies } from '../interfaces/movies';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent {
  // moviesJson: {title:string, description:string}[] = movies;
  moviesJson: Movies[] = movies; //moviesJson -> from movies-list.component.html //Movies -> interface, //movies -> JSON file
}
