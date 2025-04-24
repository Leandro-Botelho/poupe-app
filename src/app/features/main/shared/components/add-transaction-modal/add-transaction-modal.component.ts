import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  LOCALE_ID,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_DATE_LOCALE,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { PAYMENT_TYPES } from '../../../../../shared/constants/paymentTypes-combo';
import { TransactionValidatorService } from '../../service/transactionValidator.service';
import { CATEGORIES_COMBO } from '../../../../../shared/constants/categories-combo';
import { TRANSACTIONS_COMBO } from '../../../../../shared/constants/transactions-combo';
import { TransactionService } from '../../../../../shared/service/transaction/transaction.service';
import { IAddTransactionPayload } from '../../../../../shared/interface/transaction/add-transaction.payload.interface';
import { ToastService } from '../../../../../shared/service/toast/toast.service';
import { LoadingService } from '../../../../../shared/service/loading/loading.service';

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
  providers: [
    provideNativeDateAdapter(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
})
export class AddTransactionModal implements OnInit {
  categories = CATEGORIES_COMBO;
  transactions = TRANSACTIONS_COMBO;
  paymentTypes = PAYMENT_TYPES;
  form!: FormGroup;

  @Output() closeModalEvent = new EventEmitter<void>();
  closeModal() {
    this.closeModalEvent.emit();
  }

  constructor(
    private readonly transactionValidatorService: TransactionValidatorService,
    private readonly transactionService: TransactionService,
    private readonly toastService: ToastService,
    private readonly loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.form = this.transactionValidatorService.transactionGroup();
  }

  onSubmit(): void {
    if (!this.form.valid) return;

    this.loadingService.show();

    const accountId = JSON.parse(
      localStorage.getItem('user') || '{}'
    )?.accountId;

    const transactionPayload: IAddTransactionPayload = {
      name: this.form.value.name,
      amount: this.form.value.amount,
      date: this.form.value.date,
      paymentType: this.form.value.paymentType,
      transactionType: this.form.value.transactionType,
      category: this.form.value.category,
      accountId,
    };

    this.transactionService.addTransaction(transactionPayload).subscribe({
      next: () => {
        setTimeout(() => {
          this.form.reset();
          this.closeModal();
          this.toastService.showMessage(
            'Transação adicionada com sucesso',
            'success'
          );
          this.loadingService.hide();
        }, 2000);
      },
      error: (error) => {
        console.error('Error adding transaction:', error);
        this.loadingService.hide();
        this.toastService.showMessage(
          'Ocorreu um erro ao adicionar transação',
          'error'
        );
      },
    });
  }
}
