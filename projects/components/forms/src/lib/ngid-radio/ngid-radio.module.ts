import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgidRadioComponent } from './ngid-radio.component';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [NgidRadioComponent],
  exports: [NgidRadioComponent],
})
export class NgidRadioModule {}
