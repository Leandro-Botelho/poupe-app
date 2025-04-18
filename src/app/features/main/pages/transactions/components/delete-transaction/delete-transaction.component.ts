import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-transaction',
  templateUrl: './delete-transaction.component.html',
  styleUrls: ['./delete-transaction.component.css'],
  standalone: true,
  imports: [],
})
export class DeleteTransactionComponent {
  @Input({
    required: true,
  })
  transactionId!: number;

  @Output() closeModalEvent = new EventEmitter<void>();
  closeModal() {
    this.closeModalEvent.emit();
  }

  constructor() {}
}
