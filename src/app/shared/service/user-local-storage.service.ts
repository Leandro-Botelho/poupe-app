import { Injectable } from '@angular/core';
import { IUserStorage } from '../interface/user-storage.interface';

@Injectable({
  providedIn: 'root',
})
export class UserLocalStorageService {
  setUser(user: IUserStorage, token: string): void {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  }

  getUser(): IUserStorage | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  removeUser(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}
