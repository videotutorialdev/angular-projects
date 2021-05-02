import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from '../core/BaseValueAccessor';
@Component({
  selector: 'ngid-radio',
  templateUrl: './ngid-radio.component.html',
  providers: [makeProvider(NgidRadioComponent)],
})
export class NgidRadioComponent extends BaseValueAccessor {
  constructor(controlContainer: ControlContainer) {
    super(controlContainer);
  }

  protected onInit(): void {}

  public handleValueChange(value: any): void {
    if (!this.formControl.touched) {
      this.formControl.markAsTouched();
    }
    this.formControl.patchValue(
      this.optionValuePath ? value[this.optionValuePath] : value
    );
  }
}
