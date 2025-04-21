import { Component, OnInit, LOCALE_ID, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import localePt from '@angular/common/locales/pt';
import { CommonModule, registerLocaleData } from '@angular/common';
import { TRANSACTIONS_LIST } from '../../../../../../shared/constants/transactions';
import { FormatCurrencyComponent } from '../../../../../../shared/components/format-currency/format-currency.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SideMenuComponent } from '../../../../../../shared/components/side-menu/side-menu.component';
import { ITransactions } from '../../../../../../shared/interface/transactions.interface';
import { TransactionSideMenuComponent } from './components/transaction-side-menu/transaction-side-menu.component';

registerLocaleData(localePt, 'pt-br');

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    FormatCurrencyComponent,
    CommonModule,
    SideMenuComponent,
    TransactionSideMenuComponent,
  ],
  providers: [
    provideNativeDateAdapter(),
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
})
export class TransactionsListComponent {
  transactions = TRANSACTIONS_LIST;
  isOpenSideMenu = signal(false);
  currentTransaction = signal<ITransactions | null>(null);

  openSideMenu(transaction: ITransactions) {
    console.log(transaction);
    this.currentTransaction.set(transaction);
    this.isOpenSideMenu.update((prev) => !prev);
  }
  closeSideMenu() {
    this.currentTransaction.set(null);
    this.isOpenSideMenu.update(() => false);
  }
}
