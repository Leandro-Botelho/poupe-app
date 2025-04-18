import { Component, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ExpenseChartComponent } from './components/expense-chart/expense-chart.component';
import { CategoryExpensesComponent } from './components/category-expenses/category-expenses.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { AccountBalanceComponent } from './components/account-balance/account-balance.component';
import { AccountExpensesComponent } from './components/account-expenses/account-expenses.component';
import { CommonModule } from '@angular/common';
import { MONTHS } from '../../../../shared/constants/months';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
    ExpenseChartComponent,
    CategoryExpensesComponent,
    TransactionsListComponent,
    AccountBalanceComponent,
    AccountExpensesComponent,
    CommonModule,
  ],
})
export class DashboardComponent implements OnInit {
  currentMonth = signal('');
  readonly months = MONTHS;

  constructor() {}

  ngOnInit() {
    const month = new Date().getMonth() + 1;
    this.currentMonth.set(this.months[month - 1].label);
  }

  changeMonth(month: number) {
    this.currentMonth.set(this.months[month - 1].label);
  }
}
