import { NgModule } from '@angular/core';
import { AppCustomInputModule } from './app-custom-input/app-custom-input.module';
import { NgidInputModule } from './ngid-input/ngid-input.module';
@NgModule({
  exports: [AppCustomInputModule, NgidInputModule],
})
export class FormsModule {}
