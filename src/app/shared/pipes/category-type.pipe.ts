import { Pipe, PipeTransform } from '@angular/core';
import { CategoryEnum } from '../enum/category.enum';

@Pipe({
  name: 'categoryType',
  standalone: true,
})
export class CategoryTypePipe implements PipeTransform {
  transform(value: string, args?: any): any {
    if (!value) return '';

    switch (value) {
      case CategoryEnum.EXPENSES:
        return 'Despesa';
      case CategoryEnum.FOOD:
        return 'Alimentação';
      case CategoryEnum.TRANSPORTATION:
        return 'Transporte';
      case CategoryEnum.MARKET:
        return 'Mercado';
      case CategoryEnum.HEALTH:
        return 'Saúde';
      case CategoryEnum.OTHER:
        return 'Outros';

      default:
        return value;
    }
  }
}
