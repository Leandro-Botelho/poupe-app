import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../constants/baseUrl';
import { Observable } from 'rxjs';
import { IDashboardData } from '../../interface/dashboard/get-dashboard-data.interface';

interface IGetDashboardDataParams {
  accountId: string;
  year: number;
  month: number;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private readonly httpClient: HttpClient) {}

  getDashboardData(data: IGetDashboardDataParams): Observable<IDashboardData> {
    const params = new HttpParams()
      .set('accountId', data.accountId)
      .set('year', data.year.toString())
      .set('month', data.month.toString());

    return this.httpClient.get<IDashboardData>(`${BASE_URL}/dashboard`, {
      params,
    });
  }
}
