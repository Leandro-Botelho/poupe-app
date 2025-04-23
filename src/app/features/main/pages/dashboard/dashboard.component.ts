import { Component, OnInit, signal } from '@angular/core';
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
import { DashboardContextService } from '../../../../shared/service/dashboard/dashboard-context.service';

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
    private dashboardContextService: DashboardContextService
  ) {}

  ngOnInit() {
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    this.currentMonth.set({
      label: this.months[month - 1].label,
      value: this.months[month - 1].value,
    });
    this.currentYear.set(year);

    const userStorage = JSON.parse(localStorage.getItem('user') || '{}');

    const params = {
      accountId: userStorage.accountId,
      year,
      month: this.months[month - 1].value,
    };

    this.dashboardService
      .getDashboardData(params)
      .pipe(
        tap((data: IDashboardData) => {
          this.dashboardData.set({
            earnings: data.earnings,
            expenses: data.expenses,
            investment: data.investment,
          });

          this.dashboardContextService.setDashboardId(data.id);
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
