import { Validators } from '@angular/forms';

export const TransactionValidator = {
  name: [Validators.required, Validators.minLength(3)],
  amount: [Validators.required],
  date: [Validators.required, Validators.minLength(10)],
  paymentType: [Validators.required],
  transactionType: [Validators.required],
  category: [Validators.required],
};
