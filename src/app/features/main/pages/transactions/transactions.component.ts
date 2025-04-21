import { Component, LOCALE_ID, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule, registerLocaleData } from '@angular/common';
import { SideMenuComponent } from '../../../../shared/components/side-menu/side-menu.component';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { EditTransactionComponent } from './components/edit-transaction/edit-transaction.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DeleteTransactionComponent } from './components/delete-transaction/delete-transaction.component';
import { AddTransactionModal } from '../../shared/components/add-transaction-modal/add-transaction-modal.component';
import { FormatCurrencyComponent } from '../../../../shared/components/format-currency/format-currency.component';
import localePt from '@angular/common/locales/pt';
import { TRANSACTIONS_LIST } from '../../../../shared/constants/transactions';

registerLocaleData(localePt);

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    MatIconModule,
    ButtonComponent,
    MatTableModule,
    CommonModule,
    SideMenuComponent,
    ModalComponent,
    EditTransactionComponent,
    EditTransactionComponent,
    DeleteTransactionComponent,
    AddTransactionModal,
    FormatCurrencyComponent,
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
  providers: [
    provideNativeDateAdapter(),
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
})
export class TransactionsComponent implements OnInit {
  isOpenSideBarMenu = signal(false);
  isOpenDeleteModal = signal(false);
  isOpenAddTransactionModal = signal(false);

  dataSource = TRANSACTIONS_LIST;
  displayedColumns = [
    'name',
    'type',
    'category',
    'method',
    'date',
    'value',
    'actions',
  ];

  ngOnInit(): void {
    console.log(this.dataSource);
  }

  openSideMenu() {
    this.isOpenSideBarMenu.update(() => true);
  }
  closeMenu() {
    this.isOpenSideBarMenu.update(() => false);
  }

  openDeleteModal() {
    this.isOpenDeleteModal.update(() => true);
  }

  closeDeleteModal() {
    this.isOpenDeleteModal.update(() => false);
  }

  openAddTransactionModal() {
    this.isOpenAddTransactionModal.update(() => true);
  }

  closeAddTransactionModal() {
    this.isOpenAddTransactionModal.update(() => false);
  }
}
