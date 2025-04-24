import { Component, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { AuthService } from '../../shared/service/auth/auth.service';
import { SideMenuComponent } from '../../shared/components/side-menu/side-menu.component';

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
    SideMenuComponent,
  ],
})
export class MainComponent implements OnInit {
  constructor(private readonly authService: AuthService) {}

  closed = signal(false);
  toggleMenu() {
    this.closed.update((prev) => !prev);
  }

  ngOnInit() {}

  handleLogout() {
    this.authService.logout();
  }
}
