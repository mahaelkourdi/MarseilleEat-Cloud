import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../message/message.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AvisListComponent } from '../avis-list/avis-list.component';

export interface addAvisData {
  idRestaurant: any;
}

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss'],
})
export class AvisComponent implements OnInit {
  @Output() newEvent = new EventEmitter<Object>();

  isLinear = false;
  firstFormGroup: FormGroup | any;
  secondFormGroup: FormGroup | any;
  valueCuisine = 0;
  valueRapport = 0;
  valueService = 0;
  errorMessage = '';
  succesMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private message: MessageService,
    @Inject(MAT_DIALOG_DATA) public data: addAvisData,
    public dialogRef: MatDialogRef<AvisListComponent>
  ) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      nom: ['', Validators.required],
      commentaire: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (!this.firstFormGroup.getRawValue().nom) {
      this.errorMessage = 'Veuillez saisir un nom';
      return;
    } else if (!this.firstFormGroup.getRawValue().commentaire) {
      this.errorMessage = 'Veuillez saisir un commentaire';
      return;
    }
    const formValue = this.firstFormGroup.getRawValue();

    this.message
      .addAvis(
        this.data.idRestaurant,
        formValue.nom,
        formValue.commentaire,
        this.valueService,
        this.valueCuisine,
        this.valueRapport
      )
      .subscribe({
        next: (value) => {
          this.succesMessage = 'Merci, votre avis a été envoyé';
          setTimeout(() => {
            this.dialogRef.close(this.newEvent.emit(value));
            location.reload();
          }, 2000);
        },
      });
  }
}
