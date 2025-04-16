import { CurrencyPipe, registerLocaleData } from '@angular/common';
import {
  Component,
  OnInit,
  DEFAULT_CURRENCY_CODE,
  Input,
  LOCALE_ID,
} from '@angular/core';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-br');

@Component({
  selector: 'app-expense-graphic',
  templateUrl: './expense-graphic.component.html',
  styleUrls: ['./expense-graphic.component.css'],
  standalone: true,
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-br',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  imports: [CurrencyPipe],
})
export class ExpenseGraphicComponent {
  @Input({
    required: true,
  })
  title: string = '';
  @Input({
    required: true,
  })
  value: number = 0;
  @Input({
    required: true,
  })
  amount: number = 0;
}
