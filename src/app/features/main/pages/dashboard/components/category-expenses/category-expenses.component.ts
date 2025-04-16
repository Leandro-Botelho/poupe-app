import { Component, OnInit } from '@angular/core';
import { ExpenseGraphicComponent } from './components/expense-graphic/expense-graphic.component';

@Component({
  selector: 'app-category-expenses',
  templateUrl: './category-expenses.component.html',
  styleUrls: ['./category-expenses.component.css'],
  standalone: true,
  imports: [ExpenseGraphicComponent],
})
export class CategoryExpensesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
