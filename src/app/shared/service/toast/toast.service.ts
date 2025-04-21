import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastComponent } from '../../components/toast/toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private view!: ViewContainerRef;

  setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
    this.view = viewContainerRef;
  }

  showMessage(
    message: string,
    type: 'error' | 'success' | 'info' | 'alert',
    duration: number = 3000
  ) {
    const componentRef = this.view.createComponent(ToastComponent);
    componentRef.instance.message = message;
    componentRef.instance.type = type;

    setTimeout(() => {
      componentRef.instance.closeToast();

      setTimeout(() => {
        componentRef.destroy();
      }, 300);
    }, duration);
  }
}
