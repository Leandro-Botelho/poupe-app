import {
  Component,
  OnInit,
  Input,
  DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {
  CommonModule,
  CurrencyPipe,
  registerLocaleData,
} from '@angular/common';

registerLocaleData(localePt, 'pt-br');

@Component({
  selector: 'app-format-currency',
  template: `{{ amount | currency : 'BRL' }}`,
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
export class FormatCurrencyComponent {
  @Input({
    required: true,
  })
  amount: number = 0;
}
