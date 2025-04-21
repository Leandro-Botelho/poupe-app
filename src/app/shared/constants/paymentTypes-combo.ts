import { ISelectCombos } from '../interface/select-combo.interface';

export const PAYMENT_TYPES: ISelectCombos[] = [
  { value: 'pix', viewValue: 'Pix' },
  { value: 'transferBank', viewValue: 'Transferência bancária' },
  { value: 'ticket', viewValue: 'Boleto' },
  { value: 'money', viewValue: 'Dinheiro' },
];
