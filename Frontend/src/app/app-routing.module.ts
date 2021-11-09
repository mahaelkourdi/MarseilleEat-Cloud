import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProposComponent } from './propos/propos.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { DetailRestauComponent } from './detail-restau/detail-restau.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurant/:id', component: RestaurantComponent },
  { path: 'list', component: RestaurantListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'propos', component: ProposComponent },
  { path: 'detail-restau/:id', component: DetailComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [{ path: 'admin', component: AdminComponent }],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
