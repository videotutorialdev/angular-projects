import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export class PatternValidator {
  public static pattern(regex: RegExp, message?: string): ValidatorFn {
    return (AC: AbstractControl): ValidationErrors => {
      if (AC.value && !regex.test(AC.value)) {
        return {
          regex: regex,
          message:
            message || `Value should have to match with '${regex}' pattern`,
        };
      }
      return null;
    };
  }
}
