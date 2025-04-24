import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentMethod',
  standalone: true,
})
export class PaymentMethodPipe implements PipeTransform {
  transform(value: string | undefined, args?: any): any {
    if (!value) return '';

    switch (value) {
      case 'pix':
        return 'Pix';
      case 'credit_card':
        return 'Cartão de Crédito';
      case 'debit_card':
        return 'Cartão de Débito';
      case 'ticket':
        return 'Boleto';
      case 'bank_transfer':
        return 'Transferência';
      case 'cash':
        return 'Dinheiro';
      case 'other':
        return 'Outro';
      default:
        return value;
    }
  }
}
