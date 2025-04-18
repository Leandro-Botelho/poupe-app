import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { AddTransactionService } from '../../../pages/dashboard/components/account-balance/service/addTransaction.service';
import { CATEGORIES } from '../../../../../shared/constants/categories-combo';
import { TRANSACTIONS } from '../../../../../shared/constants/transactions-combo';
import { PAYMENT_TYPES } from '../../../../../shared/constants/paymentTypes-combo';
import { TransactionValidatorService } from '../../service/transactionValidator.service';

@Component({
  selector: 'app-add-transaction-modal',
  templateUrl: 'add-transaction-modal.component.html',
  styleUrl: 'add-transaction-modal.component.css',
  imports: [
    ButtonComponent,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
  ],
  standalone: true,
  providers: [provideNativeDateAdapter()],
})
export class AddTransactionModal implements OnInit {
  categories = CATEGORIES;
  transactions = TRANSACTIONS;
  paymentTypes = PAYMENT_TYPES;

  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }

  constructor(
    private readonly transactionValidatorService: TransactionValidatorService,
    private readonly addTransactionService: AddTransactionService
  ) {}

  get transactionForm() {
    return this.transactionValidatorService;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.transactionValidatorService.transactionFormGroup.valid) {
      this.addTransactionService.addTransaction();
      console.log('Transaction added successfully');
    }

    console.log(this.transactionForm.transactionFormGroup);
  }
}
