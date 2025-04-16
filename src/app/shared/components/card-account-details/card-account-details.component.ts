import { CurrencyPipe, registerLocaleData } from '@angular/common';
import {
  Component,
  DEFAULT_CURRENCY_CODE,
  Input,
  LOCALE_ID,
  OnInit,
} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { FormatCurrencyComponent } from '../format-currency/format-currency.component';

registerLocaleData(localePt, 'pt-br');

@Component({
  selector: 'app-card-account-details',
  templateUrl: './card-account-details.component.html',
  styleUrls: ['./card-account-details.component.css'],
  imports: [FormatCurrencyComponent],
  standalone: true,
})
export class CardAccountDetailsComponent {
  @Input({
    required: true,
  })
  amount: number = 0;
  @Input({
    required: true,
  })
  title: string = '';
}
