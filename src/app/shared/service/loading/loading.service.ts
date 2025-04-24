import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isLoading = signal(false);

  show() {
    this.isLoading.update(() => true);
  }

  hide() {
    this.isLoading.update(() => false);
  }

  loadingStatus() {
    return this.isLoading;
  }
}
