import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../data';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  loginAdmin(data: any): Observable<Data> {
    const adr: string = 'http://localhost:3001/login';
    return this.http.post<Data>(adr, data, { withCredentials: true });
  }

  getAllRestaurants(): Observable<Data> {
    const adr: string = environment.url + 'getRestaurants';
    return this.http.get<Data>(adr, { withCredentials: true });
  }

  getBestRestaurants(): Observable<Data> {
    const adr: string = environment.url + 'getAccueil';
    return this.http.get<Data>(adr, { withCredentials: true });
  }

  getRestaurant(id: any): Observable<Data> {
    const adr: string = environment.url + 'getRestaurant/' + id;

    return this.http.get<Data>(adr, { withCredentials: true });
  }
  sendMail(
    email: string,
    nom: string,
    prenom: string,
    commentaire: string
  ): Observable<Data> {
    const obj = {
      nom: nom,
      prenom: prenom,
      email: email,
      commentaire: commentaire,
    };
    const adr: string = environment.url + 'sendMail';
    return this.http.post<Data>(adr, obj, { withCredentials: true });
  }

  getRestaurantsByCoord(coord: any): Observable<Data> {
    const adr: string = environment.url + 'mapRestaurant';
    return this.http.post<Data>(adr, coord, { withCredentials: true });
  }

  addAvis(
    id: any,
    nom: string,
    commentaire: string,
    service: number,
    cuisine: number,
    rapport: number
  ): Observable<Data> {
    const obj = {
      nom: nom,
      commentaire: commentaire,
      cuisine: cuisine,
      rapport: rapport,
      service: service,
    };
    const adr: string = environment.url + 'addAvis/' + id;
    return this.http.post<Data>(adr, obj, { withCredentials: true });
  }

  deleteResto(id: any): Observable<Data> {
    const adr: string = 'http://localhost:3001/removeresto/' + id;
    return this.http.delete<Data>(adr, { withCredentials: true });
  }

  addResto(obj: any): Observable<Data> {
    const adr: string = 'http://localhost:3001/addresto/';
    return this.http.post<Data>(adr, obj, { withCredentials: true });
  }
}
