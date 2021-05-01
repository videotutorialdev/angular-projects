import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from '../core/BaseValueAccessor';
@Component({
  selector: 'app-custom-input',
  templateUrl: './app-custom-input.component.html',
  providers: [makeProvider(AppCustomInputComponent)]
})
export class AppCustomInputComponent extends BaseValueAccessor {
  constructor(controlContainer: ControlContainer) {
    super(controlContainer);
  }

  protected onInit(): void {}
}
