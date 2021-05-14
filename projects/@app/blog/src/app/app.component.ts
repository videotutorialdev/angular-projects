import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'ngid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'Angular Accordion Tutorial';

  constructor() {}

  ngOnInit(): void {}
}
