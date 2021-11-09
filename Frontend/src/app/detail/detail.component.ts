import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message/message.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  resto: any;
  avis: any;
  coord: any;
  evolution: any;

  idRestaurant: any = this.route.snapshot.paramMap.get('id');

  constructor(
    private message: MessageService,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.message.getRestaurant(this.idRestaurant).subscribe({
      next: (value) => {
        this.resto = value.data.restaurant[0];
        this.avis = value.data.Avis;
        this.evolution = value.data.Evolution;
        this.coord = {
          latitude: this.resto.latitude,
          longitude: this.resto.longitude,
        };
        for (let i in this.avis) {
          const listDate = this.avis;
          const date = this.datePipe.transform(listDate[i].date, 'yyyy-MM-dd');
          this.avis[i].date = date;
        }
      },
    });
  }
}
