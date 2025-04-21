import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BASE_URL } from '../../constants/baseUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuthResponse } from '../../interface/auth-response.interface';

interface ICredentials {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly route: Router,
    private readonly httpClient: HttpClient
  ) {}

  auth({ email, password }: ICredentials): Observable<IAuthResponse> {
    return this.httpClient.post<IAuthResponse>(`${BASE_URL}/auth`, {
      email,
      password,
    });
  }

  logout() {
    console.log('Logout clicked');
    this.route.navigate(['/auth/login']);
  }
}
