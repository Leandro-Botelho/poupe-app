import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { AuthService } from '../../shared/service/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    RouterOutlet,
    RouterLink,
    MatButtonModule,
    MatMenuModule,
    LogoComponent,
  ],
})
export class MainComponent implements OnInit {
  constructor(private readonly authService: AuthService) {}

  ngOnInit() {}

  handleLogout() {
    this.authService.logout();
  }
}
