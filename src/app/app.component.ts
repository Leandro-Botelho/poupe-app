import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastService } from './shared/service/toast/toast.service';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { LoadingService } from './shared/service/loading/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingComponent, CommonModule],
  template: ` <ng-container #toastContainer></ng-container>

    <app-loading *ngIf="loadingStatus()"></app-loading>
    <router-outlet></router-outlet>`,
})
export class AppComponent implements AfterViewInit {
  title = 'poupe-app';

  @ViewChild('toastContainer', { read: ViewContainerRef })
  toastContainer!: ViewContainerRef;

  constructor(
    private toastService: ToastService,
    private loadingService: LoadingService
  ) {}

  get loadingStatus() {
    return this.loadingService.loadingStatus();
  }

  ngAfterViewInit() {
    this.toastService.setRootViewContainerRef(this.toastContainer);
  }
}
