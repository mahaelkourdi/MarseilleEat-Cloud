import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ContactComponent } from './contact/contact.component';
import { ProposComponent } from './propos/propos.component';
import { DetailRestauComponent } from './detail-restau/detail-restau.component';
import { DetailComponent } from './detail/detail.component';
import { AvisListComponent } from './avis-list/avis-list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDividerModule } from '@angular/material/divider';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { NoteComponent } from './note/note.component';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { FilterPipe } from './filter/filter.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { FilterNomPipe } from './filter/filter-nom.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FilterNotePipe } from './filter/filter-note.pipe';
import { ValidateComponent } from './validate/validate.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AvisComponent } from './avis/avis.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MapDialogComponent } from './map-dialog/map-dialog.component';
import { EvolComponent } from './evol/evol.component';
import { ChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AdminRestoComponent } from './admin-resto/admin-resto.component';
import { AvatarModule } from 'ngx-avatar';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RestaurantComponent,
    RestaurantListComponent,
    ContactComponent,
    ProposComponent,
    DetailRestauComponent,
    DetailComponent,
    AvisListComponent,
    FooterComponent,
    MapComponent,
    NoteComponent,
    FilterPipe,
    FilterNomPipe,
    FilterNotePipe,
    ValidateComponent,
    AvisComponent,
    LoginComponent,
    AdminComponent,
    MapDialogComponent,
    EvolComponent,
    AdminRestoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    FontAwesomeModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule,
    MatSliderModule,
    ChartsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    AvatarModule
  ],
  entryComponents:[
    AvisComponent,
    MapDialogComponent
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
