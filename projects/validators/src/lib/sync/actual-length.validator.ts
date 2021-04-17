import { AbstractControl, ValidatorFn } from '@angular/forms';

export class ActualLengthValidator {
  public static actualLength(
    actualLength: number,
    message?: string
  ): ValidatorFn {
    return (AC: AbstractControl): { [key: string]: string | number } => {
      if (
        AC.value &&
        (AC.value.length < actualLength || AC.value.length > actualLength)
      ) {
        return {
          requiredLength: actualLength,
          actualLength: AC.value.length,
          message: message || `Actual length required is ${actualLength}`,
        };
      }
      return null;
    };
  }
}
