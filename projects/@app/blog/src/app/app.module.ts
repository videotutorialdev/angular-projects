import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from '@components/card';
import { FormsModule } from '@components/forms';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CardModule, ReactiveFormsModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
