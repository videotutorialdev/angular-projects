import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from '../core/BaseValueAccessor';
@Component({
  selector: 'ngid-checkbox',
  templateUrl: './ngid-checkbox.component.html',
  providers: [makeProvider(NgidCheckboxComponent)],
})
export class NgidCheckboxComponent extends BaseValueAccessor {
  constructor(controlContainer: ControlContainer) {
    super(controlContainer);
  }

  protected onInit(): void {}

  public handleCheckboxChange(isChecked: boolean, option: any) {
    let formControlValues: Array<any> = this.formControl.value || [];
    if (isChecked) {
      formControlValues = [...formControlValues, option];
    } else {
      const indexOfOption = formControlValues.findIndex(
        (value: any) => JSON.stringify(value) === JSON.stringify(option)
      );
      console.log(indexOfOption);
      formControlValues.splice(indexOfOption, 1);

      if (formControlValues.length === 0) {
        formControlValues = null;
      }
    }
    this.formControl.patchValue(formControlValues);
    this.formControl.markAsTouched();
  }
}
