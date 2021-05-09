import { NgModule } from '@angular/core';
import { AppCustomInputModule } from './app-custom-input/app-custom-input.module';
import { NgidCheckboxModule } from './ngid-checkbox/ngid-checkbox.module';
import { NgidInputModule } from './ngid-input/ngid-input.module';
import { NgidRadioModule } from './ngid-radio/ngid-radio.module';
import { NgidSelectModule } from './ngid-select/ngid-select.module';
import { NgidTextareaModule } from './ngid-textarea/ngid-textarea.module';
@NgModule({
  exports: [
    AppCustomInputModule,
    NgidInputModule,
    NgidTextareaModule,
    NgidSelectModule,
    NgidRadioModule,
    NgidCheckboxModule,
  ],
})
export class FormsModule {}
