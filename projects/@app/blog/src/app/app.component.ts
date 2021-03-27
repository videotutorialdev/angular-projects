import { Component, TemplateRef } from '@angular/core';
import { PopupService } from '@components/popup';
import { PopupLoginComponent } from './popup-login/popup-login.component';

@Component({
  selector: 'ngid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '@app/blog';

  constructor(public popupService: PopupService) {}

  public handleShowModal(content: TemplateRef<object>): void {
    this.popupService.open(content).subscribe((response) => {
      console.log('Info: Come from response');
      console.log(response);
    });
  }

  public handleLogin(): void {
    this.popupService.open(PopupLoginComponent, {
      user: {
        id: 1,
        name: 'John Doe',
        age: '24',
        email: 'johndoe@gmail.com'
      }
    });
  }
}
