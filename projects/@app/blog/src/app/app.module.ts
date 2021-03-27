import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// library section
import { ButtonModule } from '@components/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupModule } from 'projects/components/popup/src/public-api';
import { AppComponent } from './app.component';
import { PopupLoginComponent } from './popup-login/popup-login.component';


@NgModule({
  declarations: [
    AppComponent,
    PopupLoginComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    NgbModule,
    PopupModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
