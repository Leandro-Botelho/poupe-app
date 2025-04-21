import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../../../../shared/constants/baseUrl';

interface ICredentials {
  email: string;
  password: string;
  name: string;
  dateOfBirth: Date;
}
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private readonly httpClient: HttpClient) {}

  register(credentials: ICredentials) {
    return this.httpClient.post(`${BASE_URL}/users`, {
      email: credentials.email,
      password: credentials.password,
      name: credentials.name,
      dateOfBirth: credentials.dateOfBirth,
    });
  }
}
