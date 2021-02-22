import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// library section
import { ButtonModule } from '@components/button';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
