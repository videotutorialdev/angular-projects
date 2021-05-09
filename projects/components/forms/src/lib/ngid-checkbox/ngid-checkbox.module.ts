import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgidCheckboxComparePipe } from './ngid-checkbox-compare.pipe';
import { NgidCheckboxComponent } from './ngid-checkbox.component';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [NgidCheckboxComponent, NgidCheckboxComparePipe],
  exports: [NgidCheckboxComponent],
})
export class NgidCheckboxModule {}
