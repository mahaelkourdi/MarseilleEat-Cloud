import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-admin-resto',
  templateUrl: './admin-resto.component.html',
  styleUrls: ['./admin-resto.component.scss'],
})
export class AdminRestoComponent implements OnInit {
  nom: string;
  adresse: string;
  cp: any;
  specialite: string;
  latitude: any;
  longitude: any;

  constructor(private message: MessageService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const obj = {
      nom: this.nom,
      adresse: this.adresse,
      cp: parseFloat(this.cp),
      specialite: this.specialite,
      latitude: parseFloat(this.latitude),
      longitude: parseFloat(this.longitude),
    };
    this.message.addResto(obj).subscribe({
      next: (value) => {},
    });
  }
}
