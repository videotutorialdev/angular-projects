import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from '../core/BaseValueAccessor';
@Component({
  selector: 'ngid-input',
  templateUrl: './ngid-input.component.html',
  providers: [makeProvider(NgidInputComponent)],
})
export class NgidInputComponent extends BaseValueAccessor {
  constructor(controlContainer: ControlContainer) {
    super(controlContainer);
  }

  protected onInit(): void {}
}
