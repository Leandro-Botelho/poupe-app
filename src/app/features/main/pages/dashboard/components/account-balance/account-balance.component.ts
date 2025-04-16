import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormatCurrencyComponent } from '../../../../../../shared/components/format-currency/format-currency.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { DialogRef } from '@angular/cdk/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.css'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatIconModule,
    ButtonComponent,
    FormatCurrencyComponent,
  ],
})
export class AccountBalanceComponent implements OnInit {
  showAccountBalance = false;
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(CdkDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    this.openDialog();
  }

  showBalance() {
    this.showAccountBalance = !this.showAccountBalance;
  }
}

interface ISelectCombos {
  value: string;
  viewValue: string;
}
@Component({
  templateUrl:
    './components/add-transaction-modal/add-transaction-modal.component.html',
  styleUrl:
    './components/add-transaction-modal/add-transaction-modal.component.css',
  imports: [
    ButtonComponent,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  standalone: true,
})
export class CdkDialog {
  dialogRef = inject(DialogRef);

  transactions: ISelectCombos[] = [
    { value: 'expense', viewValue: 'Gasto' },
    { value: 'investment', viewValue: 'Investimento' },
    { value: 'gain', viewValue: 'Ganho' },
    { value: 'salary', viewValue: 'Salário' },
  ];

  paymentTypes: ISelectCombos[] = [
    { value: 'pix', viewValue: 'Pix' },
    { value: 'transferBank', viewValue: 'Transferência bancária' },
    { value: 'ticket', viewValue: 'Boleto' },
    { value: 'money', viewValue: 'Dinheiro' },
  ];
}
