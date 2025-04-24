import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading',
  template: `<mat-spinner></mat-spinner>`,
  styleUrls: ['./loading.component.css'],
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class LoadingComponent {}
