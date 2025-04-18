import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
  imports: [MatIconModule, CommonModule],
})
export class ButtonComponent {
  @Input({
    required: true,
  })
  text: string = '';
  @Input()
  variant: 'primary' | 'secondary' = 'primary';

  @Input()
  type: 'button' | 'submit' = 'button';

  @Output() click = new EventEmitter<void>();

  handleClick() {
    this.click.emit();
  }
}
