import { Component , Input} from '@angular/core';
import { Movies } from '../interfaces/movies';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.css']
})
export class MoviesCardComponent {
  @Input() movieItem !:Movies; //to send it to parent -> movies-list.component.html
}
