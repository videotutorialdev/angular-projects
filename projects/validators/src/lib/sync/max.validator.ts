import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export class MaxValidator {
  public static max(max: number, message?: string): ValidatorFn {
    return (AC: AbstractControl): ValidationErrors => {
      if (AC.value && !isNaN(+AC.value) && AC.value > max) {
        return {
          max: max,
          actual: AC.value,
          message: message || `Max Value equals to ${max}`,
        };
      }
      return null;
    };
  }
}
