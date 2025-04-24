import {
  Component,
  effect,
  Injector,
  OnInit,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ExpenseChartComponent } from './components/expense-chart/expense-chart.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { AccountBalanceComponent } from './components/account-balance/account-balance.component';
import { AccountExpensesComponent } from './components/account-expenses/account-expenses.component';
import { CommonModule } from '@angular/common';
import { MONTHS } from '../../../../shared/constants/months';
import { DashboardService } from '../../../../shared/service/dashboard/dashboard.service';
import { tap } from 'rxjs';
import { IDashboardData } from '../../../../shared/interface/dashboard/get-dashboard-data.interface';
import { MonthYearMenuComponent } from '../../../../shared/components/month-year-menu/month-year-menu.component';
import { UserLocalStorageService } from '../../../../shared/service/user-local-storage.service';

interface IGetDashboardDataParams {
  accountId: number;
  year: number;
  month: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
    ExpenseChartComponent,
    // CategoryExpensesComponent,
    TransactionsListComponent,
    AccountBalanceComponent,
    AccountExpensesComponent,
    CommonModule,
    MonthYearMenuComponent,
  ],
})
export class DashboardComponent implements OnInit {
  readonly months = MONTHS;
  readonly years = [2025];

  currentMonth = signal({
    label: '',
    value: 0,
  });
  currentYear = signal(new Date().getFullYear());

  dashboardData = signal({
    earnings: 0,
    expenses: 0,
    investment: 0,
  });

  accountBalance = signal(0);

  constructor(
    private readonly dashboardService: DashboardService,
    private readonly userLocalStorageService: UserLocalStorageService,
    private readonly injector: Injector
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

    const params: IGetDashboardDataParams = {
      accountId: userStorage.accountId,
      year,
      month: this.months[month - 1].value,
    };

    this.getDashboardData(params);

    runInInjectionContext(this.injector, () => {
      effect(() => {
        const selectedMonth = this.currentMonth().value;
        const selectedYear = this.currentYear();

        const params: IGetDashboardDataParams = {
          accountId: userStorage.accountId,
          year: selectedYear,
          month: selectedMonth,
        };

        this.getDashboardData(params);
      });
    });
  }

  getDashboardData(params: IGetDashboardDataParams) {
    this.dashboardService
      .getDashboardData(params)
      .pipe(
        tap((data: IDashboardData) => {
          if (!data) {
            this.dashboardData.set({
              earnings: 0,
              expenses: 0,
              investment: 0,
            });
            return;
          }

          this.dashboardData.set({
            earnings: data.earnings,
            expenses: data.expenses,
            investment: data.investment,
          });
        })
      )
      .subscribe();
  }

  getAccountBalance(value: number) {
    this.accountBalance.update(() => value);
  }

  changeMonth(month: number) {
    this.currentMonth.set({
      label: this.months[month - 1].label,
      value: this.months[month - 1].value,
    });
  }

  changeYear(year: number) {
    this.currentYear.set(year);
  }
}
