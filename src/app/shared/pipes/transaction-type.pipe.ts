import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionType',
  standalone: true,
})
export class TransactionTypePipe implements PipeTransform {
  transform(value: string | undefined, args?: any): any {
    if (!value) return '';

    switch (value) {
      case 'expense':
        return 'Despesa';
      case 'gain':
        return 'Ganho';
      case 'investment':
        return 'Investimento';
      default:
        return value;
    }
  }
}
