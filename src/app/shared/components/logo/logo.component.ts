import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: ` <img [width]="width" src="poupe_icon.svg" alt="default_logo" /> `,
  standalone: true,
})
export class LogoComponent implements OnInit {
  @Input() width: number = 27;

  constructor() {}

  ngOnInit() {}
}
