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

registerLocaleData(localePt);

export interface ITransactions {
  name: string;
  type: string;
  category: string;
  method: string;
  date: string;
  value: number;
}

const ELEMENT_DATA: ITransactions[] = [
  {
    name: 'Salário',
    type: 'Ganho',
    category: 'Outros',
    method: 'Transferência',
    date: '2023-01-01',
    value: 3500,
  },
  {
    name: 'Supermercado',
    type: 'Despesa',
    category: 'Alimentação',
    method: 'Cartão de Débito',
    date: '2023-01-05',
    value: 320.75,
  },
  {
    name: 'Uber',
    type: 'Despesa',
    category: 'Transporte',
    method: 'Cartão de Crédito',
    date: '2023-01-08',
    value: 45.9,
  },
  {
    name: 'Venda de notebook usado',
    type: 'Ganho',
    category: 'Venda',
    method: 'Pix',
    date: '2023-01-10',
    value: 1200,
  },
  {
    name: 'Conta de luz',
    type: 'Despesa',
    category: 'Moradia',
    method: 'Boleto',
    date: '2023-01-15',
    value: 189.3,
  },
  {
    name: 'Curso de programação',
    type: 'Despesa',
    category: 'Educação',
    method: 'Transferência',
    date: '2023-01-20',
    value: 497,
  },
];

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

  dataSource = ELEMENT_DATA;
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
