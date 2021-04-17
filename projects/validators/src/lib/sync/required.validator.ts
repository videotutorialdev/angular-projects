import { AbstractControl, ValidatorFn } from '@angular/forms';
export class RequiredValidator {
  public static required(message?: string): ValidatorFn {
    return (AC: AbstractControl): { [key: string]: string } => {
      if (!AC.value || AC.value && Array.isArray(AC.value) && AC.value.length === 0) {
        return {
          message: message || "Data Must Be Filled"
        };
      }
     return null;
    };
  }
}
