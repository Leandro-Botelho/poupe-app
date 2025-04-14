import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly route: Router) {}

  login() {
    console.log('Login clicked');
  }

  logout() {
    console.log('Logout clicked');
    this.route.navigate(['/auth/login']);
  }
}
