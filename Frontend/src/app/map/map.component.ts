import { Component, Input, OnInit } from '@angular/core';
import * as leaflet from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() coord: any;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      const myfrugalmap = leaflet
        .map('map')
        .setView([this.coord.latitude, this.coord.longitude], 14);

      leaflet
        .tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: 'MarseilleEat',
        })
        .addTo(myfrugalmap);

      const myIcon = leaflet.icon({
        iconUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png',
      });
      leaflet
        .marker([this.coord.latitude, this.coord.longitude], { icon: myIcon })
        .addTo(myfrugalmap)
        .openPopup();
    }, 75);
  }
}

/*import { Component, Input, OnInit } from '@angular/core';
import * as leaflet from 'leaflet';
import { MessageService } from '../message/message.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  coord: any;

  constructor(private message: MessageService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.message
      .getRestaurant(this.route.snapshot.paramMap.get('id'))
      .subscribe({
        next: (value) => {
          this.coord = value.data.restaurant[0];
          const myfrugalmap = leaflet
            .map('map')
            .setView([this.coord.latitude, this.coord.longitude], 14);

          leaflet
            .tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
              attribution: 'MarseilleEat',
            })
            .addTo(myfrugalmap);

          const myIcon = leaflet.icon({
            iconUrl:
              'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png',
          });
          leaflet
            .marker([this.coord.latitude, this.coord.longitude], {
              icon: myIcon,
            })
            .addTo(myfrugalmap)
            .openPopup();
        },
      });
  }
}
*/
