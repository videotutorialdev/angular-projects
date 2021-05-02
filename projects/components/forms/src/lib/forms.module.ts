import { NgModule } from '@angular/core';
import { AppCustomInputModule } from './app-custom-input/app-custom-input.module';
import { NgidInputModule } from './ngid-input/ngid-input.module';
import { NgidTextareaModule } from './ngid-textarea/ngid-textarea.module';
@NgModule({
  exports: [AppCustomInputModule, NgidInputModule, NgidTextareaModule],
})
export class FormsModule {}
