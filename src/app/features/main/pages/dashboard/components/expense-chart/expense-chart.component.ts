import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-expense-chart',
  templateUrl: './expense-chart.component.html',
  styleUrls: ['./expense-chart.component.css'],
  standalone: true,
  imports: [CommonModule, MatIconModule],
})
export class ExpenseChartComponent implements OnChanges {
  totalAmount = 0;

  @Input({
    required: true,
  })
  dashboardData: {
    earnings: number;
    expenses: number;
    investment: number;
  } = {
    earnings: 0,
    expenses: 0,
    investment: 0,
  };

  data = [
    {
      label: 'Ganhos',
      value: 0,
      color: '#39be00',
      class: 'gain',
      icon: 'trending_up',
      percent: 0,
    },
    {
      label: 'Gastos',
      value: 0,
      color: '#e93030',
      class: 'expenses',
      icon: 'trending_down',
      percent: 0,
    },
    {
      label: 'Investimento',
      value: 0,
      color: '#FFF',
      class: 'investment',
      icon: 'attach_money',
      percent: 0,
    },
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dashboardData']) {
      const total =
        this.dashboardData.earnings +
        this.dashboardData.expenses +
        this.dashboardData.investment;

      this.data[0].value = this.dashboardData.earnings;
      this.data[1].value = this.dashboardData.expenses;
      this.data[2].value = this.dashboardData.investment;

      this.data[0].percent = (this.data[0].value / total) * 100;
      this.data[1].percent = (this.data[1].value / total) * 100;
      this.data[2].percent = (this.data[2].value / total) * 100;

      this.totalAmount = total;
    }
  }

  getConicGradient(): string {
    const total = this.totalAmount || 1;
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
