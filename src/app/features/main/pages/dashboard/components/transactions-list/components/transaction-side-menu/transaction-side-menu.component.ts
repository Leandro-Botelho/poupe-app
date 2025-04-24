import { Component, Input, LOCALE_ID, OnInit } from '@angular/core';

import { DatePipe, registerLocaleData } from '@angular/common';
import { provideNativeDateAdapter } from '@angular/material/core';
import localePt from '@angular/common/locales/pt';
import { FormatCurrencyComponent } from '../../../../../../../../shared/components/format-currency/format-currency.component';
import { ITransactionPayload } from '../../../../../../../../shared/interface/transaction/transaction-payload.interface';
import { TransactionTypePipe } from '../../../../../../../../shared/pipes/transaction-type.pipe';
import { PaymentMethodPipe } from '../../../../../../../../shared/pipes/payment-method.pipe';

registerLocaleData(localePt, 'pt-br');

@Component({
  selector: 'app-transaction-side-menu',
  templateUrl: './transaction-side-menu.component.html',
  styleUrls: ['./transaction-side-menu.component.css'],
  standalone: true,
  imports: [
    FormatCurrencyComponent,
    DatePipe,
    TransactionTypePipe,
    PaymentMethodPipe,
  ],
  providers: [
    provideNativeDateAdapter(),
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
})
export class TransactionSideMenuComponent {
  @Input({
    required: true,
  })
  currentTransaction: ITransactionPayload | null = null;
}
