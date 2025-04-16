import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-expense-chart',
  templateUrl: './expense-chart.component.html',
  styleUrls: ['./expense-chart.component.css'],
  standalone: true,
  imports: [CommonModule, MatIconModule],
})
export class ExpenseChartComponent {
  data = [
    {
      label: 'Ganhos',
      value: 60,
      color: '#39be00',
      class: 'gain',
      icon: 'trending_up',
    },
    {
      label: 'Gastos',
      value: 20,
      color: '#e93030',
      class: 'expense',
      icon: 'trending_down',
    },
    {
      label: 'Investimento',
      value: 20,
      color: '#FFF',
      class: 'investment',
      icon: 'attach_money',
    },
  ];

  getConicGradient(): string {
    const total = this.data.reduce((sum, item) => sum + item.value, 0);
    let currentPercent = 0;
    const gradientParts = this.data.map((item) => {
      const start = currentPercent;
      const percent = (item.value / total) * 100;
      const end = start + percent;
      const part = `${item.color} ${start}% ${end}%`;
      currentPercent = end;
      return part;
    });
    return `conic-gradient(${gradientParts.join(', ')})`;
  }
}
