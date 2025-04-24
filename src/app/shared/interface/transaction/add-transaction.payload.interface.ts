export interface IAddTransactionPayload {
  name: string;
  amount: number;
  date: Date;
  paymentType: string;
  transactionType: string;
  category: string;
  accountId: number;
}
