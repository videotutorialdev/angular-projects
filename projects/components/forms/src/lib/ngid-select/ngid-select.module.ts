import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgidSelectComponent } from './ngid-select.component';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [NgidSelectComponent],
  exports: [NgidSelectComponent],
})
export class NgidSelectModule {}
