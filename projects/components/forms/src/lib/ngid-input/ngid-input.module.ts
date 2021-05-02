import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgidInputComponent } from './ngid-input.component';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [NgidInputComponent],
  exports: [NgidInputComponent],
})
export class NgidInputModule {}
