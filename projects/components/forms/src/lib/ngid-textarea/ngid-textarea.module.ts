import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgidTextareaComponent } from './ngid-textarea.component';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [NgidTextareaComponent],
  exports: [NgidTextareaComponent],
})
export class NgidTextareaModule {}
