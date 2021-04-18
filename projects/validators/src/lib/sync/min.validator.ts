import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export class MinValidator {
  public static min(min: number, message?: string): ValidatorFn {
    return (AC: AbstractControl): ValidationErrors => {
      if (AC.value && !isNaN(+AC.value) && AC.value < min) {
        return {
          min: min,
          actual: AC.value,
          message: message || `Min Value equals to ${min}`,
        };
      }
      return null;
    };
  }
}
