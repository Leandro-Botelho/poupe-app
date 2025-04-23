import { Component, Input, OnInit } from '@angular/core';
import { CardAccountDetailsComponent } from '../../../../../../shared/components/card-account-details/card-account-details.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-account-expenses',
  templateUrl: './account-expenses.component.html',
  styleUrls: ['./account-expenses.component.css'],
  standalone: true,
  imports: [CardAccountDetailsComponent, MatIconModule],
})
export class AccountExpensesComponent {
  @Input({
    required: true,
  })
  dashboardData: {
    earnings: number;
    expenses: number;
    investment: number;
  } = {
    earnings: 0,
    expenses: 0,
    investment: 0,
  };
}
