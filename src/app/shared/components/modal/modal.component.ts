import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: ` <div
      class="modal_backdrop"
      [class.open]="isOpen"
      (click)="closeModal()"
    ></div>

    <div class="modal_container" [class.open]="isOpen">
      <button class="close_btn" (click)="closeModal()">×</button>
      <ng-content></ng-content>
    </div>`,
  styleUrls: ['./modal.component.css'],
  standalone: true,
})
export class ModalComponent {
  @Input({
    required: true,
  })
  isOpen = false;

  @Output()
  onClose = new EventEmitter<void>();

  closeModal() {
    this.onClose.emit();
  }
}
