import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionValidator } from '../validator/transaction.validator';

@Injectable({
  providedIn: 'root',
})
export class TransactionValidatorService {
  private transactionGroup: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder) {
    this.transactionGroup = _formBuilder.group({
      name: ['', TransactionValidator.name],
      amount: ['', TransactionValidator.amount],
      date: ['', TransactionValidator.date],
      paymentType: ['', TransactionValidator.paymentType],
      transactionType: ['', TransactionValidator.transactionType],
      category: ['', TransactionValidator.category],
    });
  }

  get transactionFormGroup(): FormGroup {
    return this.transactionGroup;
  }
  get name() {
    return this.transactionGroup.get('name');
  }
  get amount() {
    return this.transactionGroup.get('amount');
  }
  get date() {
    return this.transactionGroup.get('date');
  }
  get paymentType() {
    return this.transactionGroup.get('paymentType');
  }
  get transactionType() {
    return this.transactionGroup.get('transactionType');
  }
}
