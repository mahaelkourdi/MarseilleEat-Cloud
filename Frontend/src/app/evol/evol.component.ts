import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../message/message.service';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-evol',
  templateUrl: './evol.component.html',
  styleUrls: ['./evol.component.scss'],
})
export class EvolComponent implements OnInit {
  @Input() evolution: any;
  idRestaurant: any = this.route.snapshot.paramMap.get('id');
  date: any = [];
  moyennes: any = [];

  lineChartData: ChartDataSets[] = [{ data: [], label: '' }];

  lineChartLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(0,0,0,0)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';

  constructor(private message: MessageService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.message.getRestaurant(this.idRestaurant).subscribe({
      next: (value) => {
        this.evolution = value.data.Evolution;
        const date = [];
        const moyennes = [];
        for (let i = 0; i < value.data.Evolution.length; i++) {
          const d = new Date(this.evolution[i].date);
          date[i] =
            d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
          moyennes[i] = this.evolution[i].moyenne;
        }
        this.date = date.reverse();
        this.moyennes = moyennes.reverse();
        this.lineChartData = [
          {
            data: this.moyennes,
            label: 'Évolution de la moyenne du restaurant',
          },
        ];
        this.lineChartLabels = this.date;
      },
    });
  }
}
