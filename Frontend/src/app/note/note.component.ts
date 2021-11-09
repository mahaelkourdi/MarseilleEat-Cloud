import { Component, Input, OnInit } from '@angular/core';
import {
  faClipboard,
  faEuroSign,
  faConciergeBell,
  faCookieBite,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() resto: any;
  faClipboard = faClipboard;
  faEuroSign = faEuroSign;
  faConciergeBell = faConciergeBell;
  faCookieBite = faCookieBite;

  constructor() {}

  ngOnInit(): void {}
}
