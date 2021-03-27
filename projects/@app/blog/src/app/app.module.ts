import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// library section
import { ButtonModule } from '@components/button';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupModule } from 'projects/components/popup/src/public-api';
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
    PopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
