import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [MatIconModule],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
