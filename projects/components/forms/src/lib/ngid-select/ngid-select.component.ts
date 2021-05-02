import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from '../core/BaseValueAccessor';
@Component({
  selector: 'ngid-select',
  templateUrl: './ngid-select.component.html',
  providers: [makeProvider(NgidSelectComponent)],
})
export class NgidSelectComponent extends BaseValueAccessor {
  constructor(controlContainer: ControlContainer) {
    super(controlContainer);
  }

  protected onInit(): void {}

  public handleCompareWith(val1: any, val2: any): boolean {
    return val1 && val2 ? val1.id === val2.id : val1 === val2;
  }
}
