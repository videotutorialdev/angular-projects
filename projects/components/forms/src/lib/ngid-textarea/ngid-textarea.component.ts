import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from '../core/BaseValueAccessor';
@Component({
  selector: 'ngid-textarea',
  templateUrl: './ngid-textarea.component.html',
  providers: [makeProvider(NgidTextareaComponent)],
})
export class NgidTextareaComponent extends BaseValueAccessor {
  public rows: number;

  private classNameRowObjectValue = {
    SM: 2,
    MD: 4,
    LG: 8,
  };

  constructor(controlContainer: ControlContainer) {
    super(controlContainer);
  }

  protected onInit(): void {
    this.setRowsState();
  }

  private setRowsState(): void {
    const size = this.size || 'MD';
    this.rows = this.classNameRowObjectValue[size];
  }
}
