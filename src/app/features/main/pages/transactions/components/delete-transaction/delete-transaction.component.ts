import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITransactionPayload } from '../../../../../../shared/interface/transaction/transaction-payload.interface';
import { TransactionService } from '../../../../../../shared/service/transaction/transaction.service';

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
  transaction: ITransactionPayload | null = null;

  @Output() closeModalEvent = new EventEmitter<void>();
  closeModal() {
    this.closeModalEvent.emit();
  }

  constructor(private transactionService: TransactionService) {}

  deleteTransaction() {
    if (this.transaction) {
      this.transactionService.deleteTransaction(this.transaction.id).subscribe({
        next: () => {
          this.closeModal();
        },
        error: (error) => {
          console.error('Error deleting transaction:', error);
        },
      });
    }
  }
}
