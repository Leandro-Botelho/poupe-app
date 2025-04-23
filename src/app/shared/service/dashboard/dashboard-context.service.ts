import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class DashboardContextService {
  private _dashboardId = signal(0);

  get dashboardId() {
    return this._dashboardId();
  }

  setDashboardId(value: number) {
    this._dashboardId.update(() => value);
  }
}
