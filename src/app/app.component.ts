import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastService } from './shared/service/toast/toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <ng-container #toastContainer></ng-container>
    <router-outlet></router-outlet>`,
})
export class AppComponent implements AfterViewInit {
  title = 'poupe-app';

  @ViewChild('toastContainer', { read: ViewContainerRef })
  toastContainer!: ViewContainerRef;

  constructor(private toastService: ToastService) {}

  ngAfterViewInit() {
    console.log('ViewContainerRef definido:', this.toastContainer); // Debug
    this.toastService.setRootViewContainerRef(this.toastContainer);
  }
}
