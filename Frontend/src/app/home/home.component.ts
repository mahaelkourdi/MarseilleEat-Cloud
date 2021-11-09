import { MessageService } from '../message/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  restos: any;
  constructor(private message: MessageService) {}

  ngOnInit(): void {
    this.message.getBestRestaurants().subscribe({
      next: (value) => {
        this.restos = value.data;
      },
    });
  }
}
