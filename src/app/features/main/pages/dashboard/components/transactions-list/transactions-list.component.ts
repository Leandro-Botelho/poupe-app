import {
  Component,
  OnInit,
  LOCALE_ID,
  signal,
  Input,
  effect,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import localePt from '@angular/common/locales/pt';
import { CommonModule, registerLocaleData } from '@angular/common';
import { TRANSACTIONS_LIST } from '../../../../../../shared/constants/transactions';
import { FormatCurrencyComponent } from '../../../../../../shared/components/format-currency/format-currency.component';
import {
  MAT_DATE_LOCALE,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { SideMenuComponent } from '../../../../../../shared/components/side-menu/side-menu.component';
import { TransactionSideMenuComponent } from './components/transaction-side-menu/transaction-side-menu.component';
import { TransactionService } from '../../../../../../shared/service/transaction/transaction.service';
import { DashboardContextService } from '../../../../../../shared/service/dashboard/dashboard-context.service';
import { ITransactionPayload } from '../../../../../../shared/interface/transaction/transaction-payload.interface';
import { LoadingComponent } from '../../../../../../shared/components/loading/loading.component';

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
    LoadingComponent,
  ],
  providers: [
    provideNativeDateAdapter(),
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
})
export class TransactionsListComponent implements OnInit, OnChanges {
  transactions = TRANSACTIONS_LIST;
  isOpenSideMenu = signal(false);
  currentTransaction = signal<ITransactionPayload | null>(null);
  transactions$ = signal<ITransactionPayload[]>([]);
  currentDashboardId = 0;

  @Input({
    required: true,
  })
  year!: number;
  @Input({
    required: true,
  })
  month!: number;

  isLoading = false;

  constructor(
    private readonly transactionService: TransactionService,
    private readonly dashboardContextService: DashboardContextService
  ) {
    effect(() => {
      const dashboardId = this.dashboardContextService.dashboardId;

      if (dashboardId) {
        this.currentDashboardId = dashboardId;
        return this.transactionsList(dashboardId);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.currentDashboardId > 0)
      return this.transactionsList(this.currentDashboardId);
  }

  ngOnInit() {}

  transactionsList(dashboardId: number) {
    const transactionsParams = {
      dashboardId,
      year: this.year,
      month: this.month,
    };

    this.isLoading = true;
    this.transactionService
      .getTransactions(transactionsParams)
      .subscribe((response) => {
        this.transactions$.set(response);

        this.isLoading = false;
      });
  }

  openSideMenu(transaction: ITransactionPayload) {
    console.log(transaction);
    this.currentTransaction.set(transaction);
    this.isOpenSideMenu.update((prev) => !prev);
  }
  closeSideMenu() {
    this.currentTransaction.set(null);
    this.isOpenSideMenu.update(() => false);
  }
}
