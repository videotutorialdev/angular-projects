import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'ngid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = '@app/blog';

  public user = {
    name: 'John Doe', // input text
    address: 'Jln. Mangga Delima 1', // text area
    gender: "Male", // input radio
    age: 22,
    skills: 1, // input checkbox
    country: "Indonesia", // input select
    hobbies: 2, // input select,
  }

  constructor() {}

  ngOnInit(): void {
    console.log('Info: Come from ngOnInit');
  }

  public handleCancel(): void {
    console.log('Info: Come from handleCancel');
  }

  public handleReset(): void {
    console.log('Info: Come from handleReset');
  }

  public handleSubmit(): void {
    console.log('Info: Come from handleSubmit');
  }
}
