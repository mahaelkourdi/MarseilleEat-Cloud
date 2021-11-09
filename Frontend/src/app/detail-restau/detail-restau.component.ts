import { Component, Input, OnInit } from '@angular/core';
import {
  faClipboard,
  faMapMarker,
  faCheese,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail-restau',
  templateUrl: './detail-restau.component.html',
  styleUrls: ['./detail-restau.component.scss'],
})
export class DetailRestauComponent implements OnInit {
  @Input() resto: any;

  faClipboard = faClipboard;
  faMapMarker = faMapMarker;
  faCheese = faCheese;

  path: any;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {}, 150);

    this.path = '../../assets/accueil/';
  }
}
