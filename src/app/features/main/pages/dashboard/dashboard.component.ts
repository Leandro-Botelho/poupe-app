import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CardAccountDetailsComponent } from '../../../../shared/components/card-account-details/card-account-details.component';
import { ExpenseChartComponent } from './components/expense-chart/expense-chart.component';
import { CategoryExpensesComponent } from './components/category-expenses/category-expenses.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { AccountBalanceComponent } from './components/account-balance/account-balance.component';
import { AccountExpensesComponent } from './components/account-expenses/account-expenses.component';

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
  ],
})
export class DashboardComponent implements OnInit {
  showAccountBalance = false;

  constructor() {}

  ngOnInit() {}

  showBalance() {
    this.showAccountBalance = !this.showAccountBalance;
  }
}
