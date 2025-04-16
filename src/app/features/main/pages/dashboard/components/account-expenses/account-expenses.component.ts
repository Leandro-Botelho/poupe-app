import { Component, OnInit } from '@angular/core';
import { CardAccountDetailsComponent } from '../../../../../../shared/components/card-account-details/card-account-details.component';
import { MatIconModule } from '@angular/material/icon';
import { FormatCurrencyComponent } from '../../../../../../shared/components/format-currency/format-currency.component';

@Component({
  selector: 'app-account-expenses',
  templateUrl: './account-expenses.component.html',
  styleUrls: ['./account-expenses.component.css'],
  standalone: true,
  imports: [CardAccountDetailsComponent, MatIconModule],
})
export class AccountExpensesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
