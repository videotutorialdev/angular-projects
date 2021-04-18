import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export class MaxLengthValidator {
  public static maxLength(maxLength: number, message?: string): ValidatorFn {
    return (AC: AbstractControl): ValidationErrors => {
      if (AC.value && AC.value.length > maxLength) {
        return {
          maxLength: maxLength,
          actualLength: AC.value.length,
          message: message || `Max Length Allowed Is ${maxLength}`,
        };
      }
      return null;
    };
  }
}
