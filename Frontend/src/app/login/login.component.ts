import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  username = '';
  password = '';
  errorMessage = '';

  constructor(private auth: AuthService, private route: Router) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('loggedIn') == 'true') {
      this.route.navigateByUrl('/admin');
    }
  }

  onSubmit() {
    if (this.username.trim() == '' || this.password.trim() == '') {
      this.errorMessage = 'Champ(s) vide(s)';
    } else {
      this.errorMessage = '';
      const obj: Object = {
        username: this.username,
        password: this.password,
      };
      this.auth.sendAuthentication(obj).subscribe({
        next: (value) => this.auth.finalizeAuthentication(value),
        complete: () => this.finalizeCheck(),
      });
    }
  }

  finalizeCheck(): void {
    if (this.auth.isLoggedIn) {
      this.errorMessage = '';
      if (this.auth.redirectUrl == '') {
        this.route.navigateByUrl('/admin');
      } else {
        this.route.navigateByUrl(this.auth.redirectUrl);
      }
    } else {
      this.errorMessage = 'Mauvaise Combinaison';
    }
  }

  returnHome(): void {
    this.route.navigateByUrl('/');
  }
}
