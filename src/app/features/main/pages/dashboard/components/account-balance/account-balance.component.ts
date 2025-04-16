import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { FormatCurrencyComponent } from '../../../../../../shared/components/format-currency/format-currency.component';

@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.css'],
  standalone: true,
  imports: [MatIconModule, ButtonComponent, FormatCurrencyComponent],
})
export class AccountBalanceComponent {
  showAccountBalance = false;

  showBalance() {
    this.showAccountBalance = !this.showAccountBalance;
  }
}
