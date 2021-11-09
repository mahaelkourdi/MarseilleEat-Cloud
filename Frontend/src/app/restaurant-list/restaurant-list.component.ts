import { MessageService } from '../message/message.service';
import { Component, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { MapDialogComponent } from '../map-dialog/map-dialog.component';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
})
export class RestaurantListComponent implements OnInit {
  restos: any;
  search = '';
  searchName = '';
  checkNote = false;
  faTimesCircle = faTimesCircle;
  latitude: any;
  longitude: any;
  constructor(public dialog: MatDialog, private message: MessageService) {}

  ngOnInit(): void {
    this.message.getAllRestaurants().subscribe({
      next: (value) => {
        this.restos = value.data;
      },
    });
  }

  sleep(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async geolocalisation() {
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
        },
        (error) => {
          console.error(error);
        },
        options
      );
    } else {
      console.error('erreur !');
    }
    await this.sleep(3500);
    const dialogRef = this.dialog.open(MapDialogComponent, {
      width: '75%',
      height: '75%',
      data: { latitude: this.latitude, longitude: this.longitude },
    });
  }
}
