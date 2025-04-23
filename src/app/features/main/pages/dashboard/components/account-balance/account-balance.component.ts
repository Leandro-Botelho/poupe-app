import {
  Component,
  EventEmitter,
  inject,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormatCurrencyComponent } from '../../../../../../shared/components/format-currency/format-currency.component';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../../../../shared/components/modal/modal.component';
import { AddTransactionModal } from '../../../../shared/components/add-transaction-modal/add-transaction-modal.component';
import { tap } from 'rxjs';
import { TransactionService } from '../../../../../../shared/service/transaction/transaction.service';

@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    ButtonComponent,
    FormatCurrencyComponent,
    CommonModule,
    ModalComponent,
    AddTransactionModal,
  ],
})
export class AccountBalanceComponent implements OnInit {
  showAccountBalance = signal(false);
  isOpenModal = signal(false);
  accountBalance = signal(0);

  @Output() accountBalanceChange = new EventEmitter<number>();

  emitAccountBalance() {
    this.accountBalanceChange.emit(this.accountBalance());
  }

  constructor(private transactionService: TransactionService) {}

  openModal() {
    this.isOpenModal.update((prev) => !prev);
  }

  ngOnInit(): void {
    this.transactionService
      .getAccountBalance()
      .pipe(
        tap((response) => {
          this.accountBalance.set(response.accountBalance);
          this.emitAccountBalance();
        })
      )
      .subscribe();
  }

  closeModal() {
    this.isOpenModal.update((prev) => !prev);
  }

  showBalance() {
    this.showAccountBalance.update((prev) => !prev);
  }
}
