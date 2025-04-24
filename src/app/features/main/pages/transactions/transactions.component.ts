import {
  Component,
  effect,
  inject,
  Injector,
  LOCALE_ID,
  OnInit,
  runInInjectionContext,
  signal,
  SimpleChanges,
} from '@angular/core';
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
import { TransactionService } from '../../../../shared/service/transaction/transaction.service';
import { MONTHS } from '../../../../shared/constants/months';
import { MatMenuModule } from '@angular/material/menu';
import { ITransactionPayload } from '../../../../shared/interface/transaction/transaction-payload.interface';
import { UserLocalStorageService } from '../../../../shared/service/user-local-storage.service';
import { MonthYearMenuComponent } from '../../../../shared/components/month-year-menu/month-year-menu.component';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';
import { TransactionTypePipe } from '../../../../shared/pipes/transaction-type.pipe';
import { PaymentMethodPipe } from '../../../../shared/pipes/payment-method.pipe';
import { CategoryTypePipe } from '../../../../shared/pipes/category-type.pipe';
import { ResponsiveCardComponent } from './components/responsive-card/responsive-card.component';

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
    MatMenuModule,
    MonthYearMenuComponent,
    TransactionTypePipe,
    PaymentMethodPipe,
    CategoryTypePipe,
    ResponsiveCardComponent,
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
  readonly months = MONTHS;
  readonly years = [2025];
  readonly displayedColumns = [
    'name',
    'type',
    'category',
    'method',
    'date',
    'value',
    'actions',
  ];

  currentMonth = signal({
    label: '',
    value: 0,
  });
  currentYear = signal(new Date().getFullYear());

  selectedTransaction = signal<ITransactionPayload | null>(null);

  isOpenSideBarMenu = signal(false);
  isOpenDeleteModal = signal(false);
  isOpenAddTransactionModal = signal(false);

  transactionsList$ = signal<ITransactionPayload[]>([]);

  constructor(
    private readonly transactionService: TransactionService,
    private injector: Injector,
    private userLocalStorageService: UserLocalStorageService
  ) {}

  ngOnInit() {
    const userStorage = this.userLocalStorageService.getUser();

    if (!userStorage) return;

    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    this.currentMonth.set({
      label: this.months[month - 1].label,
      value: this.months[month - 1].value,
    });
    this.currentYear.set(year);

    this.transactionsList(userStorage.accountId);

    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.transactionsList(userStorage.accountId);
      });
    });
  }

  transactionsList(accountId: number) {
    const transactionsParams = {
      accountId,
      year: this.currentYear(),
      month: this.currentMonth().value,
    };

    this.transactionService
      .getTransactions(transactionsParams)
      .subscribe((response) => {
        this.transactionsList$.set(response);
      });
  }

  openSideMenu(transaction: ITransactionPayload) {
    this.isOpenSideBarMenu.update(() => true);
    this.selectedTransaction.update(() => transaction);
  }

  closeMenu() {
    this.isOpenSideBarMenu.update(() => false);
    this.selectedTransaction.update(() => null);
  }

  openDeleteModal(transaction: ITransactionPayload) {
    this.isOpenDeleteModal.update(() => true);
    this.selectedTransaction.update(() => transaction);
  }

  closeDeleteModal() {
    this.isOpenDeleteModal.update(() => false);
    this.selectedTransaction.update(() => null);
  }

  openAddTransactionModal() {
    this.isOpenAddTransactionModal.update(() => true);
  }

  changeMonth(month: number) {
    this.currentMonth.update(() => {
      return {
        label: this.months[month - 1].label,
        value: this.months[month - 1].value,
      };
    });
  }

  changeYear(year: number) {
    this.currentYear.update(() => year);
  }

  closeAddTransactionModal() {
    this.isOpenAddTransactionModal.update(() => false);
  }
}
