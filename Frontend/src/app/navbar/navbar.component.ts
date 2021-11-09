import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faAddressCard,
  faEnvelopeOpen,
  faHome,
  faPizzaSlice,
  faUtensils,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faUtensils = faUtensils;
  faHome = faHome;
  faAddressCard = faAddressCard;
  faEnvelopeOpen = faEnvelopeOpen;
  faPizzaSlice = faPizzaSlice;
  faUserShield = faUserShield;

  constructor(private route: Router) {}

  ngOnInit(): void {}
}
