import {
  Component,
  LOCALE_ID,
  signal,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import localePt from '@angular/common/locales/pt';
import { CommonModule, registerLocaleData } from '@angular/common';
import { TRANSACTIONS_LIST } from '../../../../../../shared/constants/transactions';
import { FormatCurrencyComponent } from '../../../../../../shared/components/format-currency/format-currency.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SideMenuComponent } from '../../../../../../shared/components/side-menu/side-menu.component';
import { TransactionSideMenuComponent } from './components/transaction-side-menu/transaction-side-menu.component';
import { TransactionService } from '../../../../../../shared/service/transaction/transaction.service';
import { ITransactionPayload } from '../../../../../../shared/interface/transaction/transaction-payload.interface';
import { LoadingService } from '../../../../../../shared/service/loading/loading.service';
import { UserLocalStorageService } from '../../../../../../shared/service/user-local-storage.service';

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
export class TransactionsListComponent implements OnChanges {
  // transactions = TRANSACTIONS_LIST;
  isOpenSideMenu = signal(false);
  currentTransaction = signal<ITransactionPayload | null>(null);
  transactions$ = signal<ITransactionPayload[]>([]);
  accountId = 0;

  @Input({
    required: true,
  })
  year!: number;
  @Input({
    required: true,
  })
  month!: number;

  constructor(
    private readonly transactionService: TransactionService,
    private readonly loadingService: LoadingService,
    private readonly userLocalStorageService: UserLocalStorageService
  ) {}

  ngOnInit() {
    const userStorage = this.userLocalStorageService.getUser();
    if (!userStorage) return;

    this.accountId = userStorage.accountId;

    this.transactionsList(userStorage.accountId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['year'] || changes['month']) {
      this.transactionsList(this.accountId);
    }
  }

  transactionsList(accountId: number) {
    this.loadingService.show();
    const transactionsParams = {
      accountId,
      year: this.year,
      month: this.month,
    };

    this.transactionService
      .getTransactions(transactionsParams)
      .subscribe((response) => {
        this.transactions$.set(response);
        this.loadingService.hide();
      });
  }

  openSideMenu(transaction: ITransactionPayload) {
    this.currentTransaction.set(transaction);
    this.isOpenSideMenu.update((prev) => !prev);
  }
  closeSideMenu() {
    this.currentTransaction.set(null);
    this.isOpenSideMenu.update(() => false);
  }
}
