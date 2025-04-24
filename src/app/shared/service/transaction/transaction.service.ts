import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../constants/baseUrl';
import { IGetAccountBalanceResponse } from '../../interface/transaction/get-account-balance.interface';
import { IAddTransactionPayload } from '../../interface/transaction/add-transaction.payload.interface';
import { IGetTransactionsParams } from '../../interface/transaction/get-transactions-params.interface';
import { ITransactionPayload } from '../../interface/transaction/transaction-payload.interface';

interface IUpdateTransactionPayload extends IAddTransactionPayload {
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private httpClient: HttpClient) {}

  getAccountBalance(): Observable<IGetAccountBalanceResponse> {
    return this.httpClient.get<IGetAccountBalanceResponse>(
      `${BASE_URL}/account`
    );
  }

  addTransaction(transactionPayload: IAddTransactionPayload) {
    return this.httpClient.post<IAddTransactionPayload>(
      `${BASE_URL}/transactions`,
      transactionPayload
    );
  }

  getTransactions(
    transactionParams: IGetTransactionsParams
  ): Observable<ITransactionPayload[]> {
    const params = new HttpParams()
      .set('accountId', transactionParams.accountId)
      .set('year', transactionParams.year)
      .set('month', transactionParams.month);

    return this.httpClient.get<ITransactionPayload[]>(
      `${BASE_URL}/transactions`,
      {
        params,
      }
    );
  }

  deleteTransaction(transactionId: number) {
    return this.httpClient.delete(`${BASE_URL}/transactions/${transactionId}`);
  }

  updateTransaction({ id, ...transactionsPayload }: IUpdateTransactionPayload) {
    return this.httpClient.patch<ITransactionPayload>(
      `${BASE_URL}/transactions/${id}`,
      transactionsPayload
    );
  }
}
