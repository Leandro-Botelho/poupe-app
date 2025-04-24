import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BASE_URL } from '../../constants/baseUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuthResponse } from '../../interface/auth-response.interface';
import { UserLocalStorageService } from '../user-local-storage.service';

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
    private readonly httpClient: HttpClient,
    private readonly userLocalStorageService: UserLocalStorageService
  ) {}

  auth({ email, password }: ICredentials): Observable<IAuthResponse> {
    return this.httpClient.post<IAuthResponse>(`${BASE_URL}/auth`, {
      email,
      password,
    });
  }

  logout() {
    this.userLocalStorageService.removeUser();
    this.route.navigate(['/auth/login']);
  }
}
