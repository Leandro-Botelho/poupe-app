import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddTransactionService {
  constructor() {}

  addTransaction() {
    console.log('addTransaction');
  }
}
