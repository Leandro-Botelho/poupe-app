import {
  Component,
  EventEmitter,
  Input,
  LOCALE_ID,
  OnInit,
  Output,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ITransactionPayload } from '../../../../../../shared/interface/transaction/transaction-payload.interface';
import { TransactionTypePipe } from '../../../../../../shared/pipes/transaction-type.pipe';
import { CategoryTypePipe } from '../../../../../../shared/pipes/category-type.pipe';
import { PaymentMethodPipe } from '../../../../../../shared/pipes/payment-method.pipe';
import { FormatCurrencyComponent } from '../../../../../../shared/components/format-currency/format-currency.component';
import { DatePipe, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-br');

@Component({
  selector: 'app-responsive-card',
  templateUrl: './responsive-card.component.html',
  styleUrls: ['./responsive-card.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    TransactionTypePipe,
    CategoryTypePipe,
    PaymentMethodPipe,
    FormatCurrencyComponent,
    DatePipe,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
})
export class ResponsiveCardComponent implements OnInit {
  @Output() handleDeleteEvent = new EventEmitter();
  @Output() handleEditEvent = new EventEmitter();

  @Input() transactions!: ITransactionPayload[];

  handleDelete() {
    this.handleDeleteEvent.emit();
  }
  handleEdit() {
    this.handleEditEvent.emit();
  }

  constructor() {}

  ngOnInit() {
    console.log(this.transactions);
  }
}
