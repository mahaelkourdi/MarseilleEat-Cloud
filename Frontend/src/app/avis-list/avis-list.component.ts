import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { AvisComponent } from '../avis/avis.component';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

interface Avis {
  user: string;
  date: any;
  moyenne: any;
  avis: any;
}

@Component({
  selector: 'app-avis-list',
  templateUrl: './avis-list.component.html',
  styleUrls: ['./avis-list.component.scss'],
})
export class AvisListComponent implements OnInit {
  @Input() avis: any;

  faClipboard = faClipboard;
  idRestaurant: any = this.route.snapshot.paramMap.get('id');

  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;

  constructor(public dialog: MatDialog, private route: ActivatedRoute) {}

  ngOnInit(): void {
    setTimeout(() => {
      const data = new MatTableDataSource<Avis>(this.avis);
      data.paginator = this.paginator;
      this.obs = data.connect();
    }, 50);
  }

  addAvis(): void {
    this.dialog.open(AvisComponent, {
      width: '50%',
      height: '75%',
      data: {
        idRestaurant: this.idRestaurant,
      },
    });
  }
  updateAvis(res: any): void {
    if (res) {
      const data = this.avis;
      data.push(res);
      this.avis = data;
    }
  }
}
