import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('fadeOut', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition(':enter', [
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-out',
          style({ opacity: 0, transform: 'translateY(20px)' })
        ),
      ]),
    ]),
  ],
})
export class ToastComponent {
  @Input({
    required: true,
  })
  message = '';
  @Input({
    required: true,
  })
  type: 'error' | 'success' | 'info' | 'alert' = 'success';

  isVisible = signal(true);

  closeToast() {
    this.isVisible.update(() => false);
  }
}
