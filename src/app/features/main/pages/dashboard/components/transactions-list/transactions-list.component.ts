import {
  Component,
  OnInit,
  DEFAULT_CURRENCY_CODE,
  Input,
  LOCALE_ID,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import localePt from '@angular/common/locales/pt';
import { CurrencyPipe, registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt-br');

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css'],
  standalone: true,
  imports: [MatIconModule, CurrencyPipe],

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
})
export class TransactionsListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
