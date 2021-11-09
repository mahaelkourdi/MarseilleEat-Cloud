import { MessageService } from '../message/message.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Data } from '../data';
import { MatDialog } from '@angular/material/dialog';
import { AdminRestoComponent } from '../admin-resto/admin-resto.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})

// TODO: Formulaire ajout d'une restaurant.
export class AdminComponent implements OnInit {
  displayedColumns: string[] = [
    'nom',
    'adresse',
    'codePostal',
    'specialite',
    'idRestaurant',
  ];
  dataSource = new MatTableDataSource<Data>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private message: MessageService,
    public dialog: MatDialog,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.message.getAllRestaurants().subscribe({
      next: (value) => {
        this.dataSource.data = value['data'];
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    });
  }

  addResto(): void {
    this.dialog.open(AdminRestoComponent, {
      width: '50%',
      height: '50%',
    });
  }

  deleteResto(id: any): void {
    this.message.deleteResto(id).subscribe({
      next: (value) => {
        location.reload();
      },
    });
  }

  loggedOff(): void {
    sessionStorage.removeItem('loggedIn');
    this.route.navigateByUrl('/');
  }
}
