import { Component, Input, OnInit } from '@angular/core';
import {
  faClipboard,
  faMapMarker,
  faCheese,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {
  // Restaurants qu'on va afficher dans la page "home"
  @Input() data: any;

  faClipboard = faClipboard;
  faMapMarker = faMapMarker;
  faCheese = faCheese;

  path: any;

  constructor() {}

  ngOnInit(): void {
    this.path = '../../assets/accueil/';
  }
}
