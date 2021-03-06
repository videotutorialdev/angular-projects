import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export class MinLengthValidator {
  public static minLength(minLength: number, message?: string): ValidatorFn {
    return (AC: AbstractControl): ValidationErrors => {
      if (AC.value &&  AC.value.length < minLength) {
        return {
          minLength: minLength,
          actualLength: AC.value.length,
          message: message || `Minimum length ${minLength}`,
        };
      }
      return null;
    };
  }
}
