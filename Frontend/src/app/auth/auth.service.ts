import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string = '';

  constructor(private message: MessageService) {}

  sendAuthentication(obj: any) {
    return this.message.loginAdmin(obj);
  }

  finalizeAuthentication(reponse: Data) {
    if (reponse.status == 'ok') {
      this.isLoggedIn = true;
      sessionStorage.setItem('loggedIn', 'true');
    } else {
      this.isLoggedIn = false;
    }
  }

  test() {
    return this.isLoggedIn;
  }
}
