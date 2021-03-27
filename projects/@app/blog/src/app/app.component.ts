import { Component } from '@angular/core';

@Component({
  selector: 'ngid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '@app/blog';

  public handleClick(): void {
    console.log('Info: Click works!!!');
  }
}
