import { Component , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import movies from '../../assets/products-list.json';
import { Movies } from '../interfaces/movies';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  moviesJson: Movies[] = movies;

  @Input() movieItem !:Movies;

  items: Movies[]=movies;
  selectedItem: any;
  constructor(private activeRoute: ActivatedRoute){}

  ngOnInit(){
    this.selectedItem = this.items.find(items => items.id == this.activeRoute.snapshot.params['id'])
    
    console.log(this.selectedItem);

  }
}
