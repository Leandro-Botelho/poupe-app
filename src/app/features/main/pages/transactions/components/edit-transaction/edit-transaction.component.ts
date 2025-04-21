import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { PAYMENT_TYPES } from '../../../../../../shared/constants/paymentTypes-combo';
import { TransactionValidatorService } from '../../../../shared/service/transactionValidator.service';
import { CATEGORIES_COMBO } from '../../../../../../shared/constants/categories-combo';
import { TRANSACTIONS_COMBO } from '../../../../../../shared/constants/transactions-combo';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css'],
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
})
export class EditTransactionComponent implements OnInit {
  categories = CATEGORIES_COMBO;
  transactions = TRANSACTIONS_COMBO;
  paymentTypes = PAYMENT_TYPES;

  @Output() closeSideBarEvent = new EventEmitter<void>();
  closeSideBar() {
    this.closeSideBarEvent.emit();
  }

  constructor(
    private readonly editTransactionValidatorService: TransactionValidatorService
  ) {}

  get editTransactionForm() {
    return this.editTransactionValidatorService;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.editTransactionValidatorService.transactionFormGroup.valid) {
      console.log('Transaction edited successfully');
    }

    console.log(this.editTransactionForm.transactionFormGroup);
  }
}
