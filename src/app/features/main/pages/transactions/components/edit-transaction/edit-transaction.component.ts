import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  LOCALE_ID,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { PAYMENT_TYPES } from '../../../../../../shared/constants/paymentTypes-combo';
import { TransactionValidatorService } from '../../../../shared/service/transactionValidator.service';
import { CATEGORIES_COMBO } from '../../../../../../shared/constants/categories-combo';
import { TRANSACTIONS_COMBO } from '../../../../../../shared/constants/transactions-combo';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ITransactionPayload } from '../../../../../../shared/interface/transaction/transaction-payload.interface';
import { TransactionService } from '../../../../../../shared/service/transaction/transaction.service';
import { UserLocalStorageService } from '../../../../../../shared/service/user-local-storage.service';

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
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
  standalone: true,
})
export class EditTransactionComponent implements OnInit {
  categories = CATEGORIES_COMBO;
  transactions = TRANSACTIONS_COMBO;
  paymentTypes = PAYMENT_TYPES;

  form!: FormGroup;

  constructor(
    private readonly editTransactionValidatorService: TransactionValidatorService,
    private readonly transactionsService: TransactionService,
    private readonly userLocalStorageService: UserLocalStorageService
  ) {}

  @Input({
    required: true,
  })
  selectedTransaction: ITransactionPayload | null = null;

  @Output() closeSideBarEvent = new EventEmitter<void>();
  closeSideBar() {
    this.closeSideBarEvent.emit();
  }

  ngOnInit(): void {
    this.form = this.editTransactionValidatorService.transactionGroup();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['selectedTransaction'] &&
      changes['selectedTransaction'].currentValue
    ) {
      if (this.selectedTransaction) {
        this.form.patchValue({
          name: this.selectedTransaction.name,
          amount: this.selectedTransaction.amount,
          date: this.selectedTransaction.date,
          paymentType: this.selectedTransaction.paymentType,
          transactionType: this.selectedTransaction.transactionType,
          category: this.selectedTransaction.category,
        });
      }
    }
  }

  get editTransactionForm() {
    return this.editTransactionValidatorService;
  }

  onSubmit(): void {
    if (this.form.valid) {
      const userStorage = this.userLocalStorageService.getUser();
      if (!userStorage || !this.selectedTransaction) return;

      const updateTransactionPayload = {
        ...this.form.value,
        id: this.selectedTransaction.id,
        accountId: userStorage.accountId,
      };

      this.transactionsService
        .updateTransaction(updateTransactionPayload)
        .subscribe({
          next: () => {
            this.form.reset();
            this.closeSideBar();
          },
          error: (error) => {
            console.error('Error updating transaction:', error);
            this.closeSideBar();
          },
        });
    }
  }
}
