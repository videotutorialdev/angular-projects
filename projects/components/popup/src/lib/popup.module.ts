import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PopupService } from './popup.service';
import { PopupComponent } from './popup.component';
@NgModule({
  declarations: [PopupComponent],
  imports: [CommonModule],
  exports: [PopupComponent]
})
export class PopupModule { }
