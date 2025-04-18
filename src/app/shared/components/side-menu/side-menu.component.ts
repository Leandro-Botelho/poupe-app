import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  template: ` <div class="side-menu" [class.open]="isOpen">
      <button class="close" (click)="closeMenu()">Fechar</button>
      <ng-content></ng-content>
    </div>

    <div class="backdrop" [class.open]="isOpen" (click)="closeMenu()"></div>`,
  styleUrls: ['./side-menu.component.css'],
  standalone: true,
})
export class SideMenuComponent {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  closeMenu() {
    this.closed.emit();
  }
}
