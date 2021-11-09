import { MessageService } from '../message/message.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as leaflet from 'leaflet';
import {
  faClipboard,
  faMapMarker,
  faCheese,
} from '@fortawesome/free-solid-svg-icons';

interface DialogData {
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.scss'],
})
export class MapDialogComponent implements OnInit {
  restos: any;
  faClipboard = faClipboard;
  faMapMarker = faMapMarker;
  faCheese = faCheese;

  constructor(
    public dialogRef: MatDialogRef<MapDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private message: MessageService
  ) {}

  ngOnInit(): void {
    const coord = {
      coord: {
        latitude: this.data.latitude,
        longitude: this.data.longitude,
      },
    };
    this.message.getRestaurantsByCoord(coord).subscribe({
      next: (value) => {
        this.restos = value.data;
      },
    });
    setTimeout(() => {
      const myfrugalmap = leaflet
        .map('map')
        .setView([this.data.latitude, this.data.longitude], 15);

      leaflet
        .tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: 'MarseilleEat',
        })
        .addTo(myfrugalmap);

      const iconHome = leaflet.icon({
        iconUrl:
          'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      });
      const iconResto = leaflet.icon({
        iconUrl:
          'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
      });

      leaflet
        .marker([this.data.latitude, this.data.longitude], { icon: iconHome })
        .bindPopup("Ici c'est chez moi")
        .addTo(myfrugalmap);

      this.restos.forEach((resto: any) => {
        const detail = `${resto.nom} - ${resto.specialite} - ${resto.moyenne}/5`;
        leaflet
          .marker([resto.latitude, resto.longitude], { icon: iconResto })
          .bindPopup(detail)
          .addTo(myfrugalmap);
      });
    }, 50);
  }
}
