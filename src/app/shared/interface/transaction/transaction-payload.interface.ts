export interface ITransactionPayload {
  id: number;
  name: string;
  amount: number;
  date: string;
  paymentType: string;
  transactionType: string;
  category: string;
  accountId: number;
  dashboardId: number;
}
