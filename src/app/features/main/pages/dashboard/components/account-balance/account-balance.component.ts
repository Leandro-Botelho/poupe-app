import { Component, inject, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormatCurrencyComponent } from '../../../../../../shared/components/format-currency/format-currency.component';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../../../../shared/components/modal/modal.component';
import { AddTransactionModal } from '../../../../shared/components/add-transaction-modal/add-transaction-modal.component';

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
export class AccountBalanceComponent {
  showAccountBalance = signal(false);
  isOpenModal = signal(false);

  openModal() {
    this.isOpenModal.update((prev) => !prev);
  }

  closeModal() {
    this.isOpenModal.update((prev) => !prev);
  }

  showBalance() {
    this.showAccountBalance.update((prev) => !prev);
  }
}
