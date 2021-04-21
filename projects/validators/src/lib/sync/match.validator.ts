import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export class MatchValidator {
  public static match(matchWith: string, message?: string): ValidatorFn {
    return (AC: AbstractControl): ValidationErrors => {
      if (AC.parent && AC.value) {
        const formControlMatchWith = AC.parent.get(matchWith);
        formControlMatchWith.valueChanges.subscribe((val) => {
          if (AC.invalid && val == AC.value || AC.valid && val != AC.value) {
            AC.updateValueAndValidity();
          }
        });
        if (AC.value != formControlMatchWith.value) {
          return {
            message: message || `Value doesn't match with '${matchWith}' value`,
          };
        }
      }
      return null;
    };
  }
}
