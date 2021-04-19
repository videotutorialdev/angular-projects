import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Regex Docs
// Stack Overflow: rnevius answer
// anaswer url: https://stackoverflow.com/a/46181/8012192
export class EmailValidator {
  public static email(message?: string): ValidatorFn {
    return (AC: AbstractControl): ValidationErrors => {
      if (AC.value) {
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(AC.value)) {
          return {
            message: 'Email is not valid',
          };
        }
        return null;
      }
      return null;
    };
  }
}
