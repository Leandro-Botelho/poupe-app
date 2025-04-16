import {
  Component,
  DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
  OnInit,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CurrencyPipe, registerLocaleData } from '@angular/common';
import { CardAccountDetailsComponent } from '../../../../shared/components/card-account-details/card-account-details.component';
import { ExpenseChartComponent } from './components/expense-chart/expense-chart.component';
import { CategoryExpensesComponent } from './components/category-expenses/category-expenses.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
    ButtonComponent,
    CurrencyPipe,
    CardAccountDetailsComponent,
    ExpenseChartComponent,
    CategoryExpensesComponent,
    TransactionsListComponent,
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
