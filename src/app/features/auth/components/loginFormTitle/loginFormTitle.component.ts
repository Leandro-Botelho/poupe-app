import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginFormTitle',
  standalone: true,
  template: ` <h1 class="login_title">{{ title }}</h1> `,
  styleUrls: ['./loginFormTitle.component.css'],
})
export class LoginFormTitleComponent {
  @Input() title: string = '';
}
