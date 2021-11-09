import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message/message.service';
import { MatDialog } from '@angular/material/dialog';
import { ValidateComponent } from '../validate/validate.component';

// A revoir la gestion d'erreur
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  submitted = false;
  email: string;
  nom: string;
  prenom: string;
  commentaire: string;
  errorMessage: string;

  constructor(private message: MessageService, public dialog: MatDialog) {
    this.email = '';
    this.nom = '';
    this.prenom = '';
    this.commentaire = '';
    this.errorMessage = '';
  }

  ngOnInit(): void {}

  verificationEmail(email: string) {
    let value =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return value.test(email);
  }

  // Fonction qui envoie les données au backend
  onSubmit() {
    if (
      this.email.trim() == '' ||
      this.nom.trim() == '' ||
      this.prenom.trim() == '' ||
      this.commentaire.trim() == ''
    ) {
      this.errorMessage = 'Champ(s) vide(s)';
    } else if (!this.verificationEmail(this.email)) {
      this.errorMessage = 'Email non valide';
    } else {
      this.submitted = true;
      this.errorMessage = 'Données envoyées avec succès';

      //if this.submitted = true;
      this.message
        .sendMail(this.email, this.nom, this.prenom, this.commentaire)
        .subscribe({
          next: (value) => {},
        });
    }

    this.email = '';
    this.nom = '';
    this.prenom = '';
    this.commentaire = '';

    this.dialog.open(ValidateComponent, {
      width: '50%',
      data: {
        errorMessage: this.errorMessage,
      },
    });
  }
}
