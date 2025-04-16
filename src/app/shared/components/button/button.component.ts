import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
}
