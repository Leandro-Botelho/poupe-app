import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MONTHS } from '../../constants/months';

@Component({
  selector: 'app-month-year-menu',
  templateUrl: './month-year-menu.component.html',
  styleUrls: ['./month-year-menu.component.css'],
  standalone: true,
  imports: [MatIcon, CommonModule, MatMenuModule],
})
export class MonthYearMenuComponent {
  @Input({
    required: true,
  })
  month: string = '';

  @Input({
    required: true,
  })
  year: number = 0;

  @Input({
    required: true,
  })
  years: number[] = [];

  readonly months = MONTHS;

  @Output() changeMonthEmit = new EventEmitter<number>();
  @Output() changeYearEmit = new EventEmitter<number>();
}
