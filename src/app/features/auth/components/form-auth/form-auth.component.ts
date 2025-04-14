import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.css'],
  standalone: true,
  imports: [RouterLink],
})
export class FormAuthComponent implements OnInit {
  @Input({
    required: true,
  })
  title: string = '';
  @Input({
    required: true,
  })
  redirectText: string = '';
  @Input({
    required: true,
  })
  routeText: string = '';
  @Input({
    required: true,
  })
  route: string = '';

  constructor() {}

  ngOnInit() {}
}
