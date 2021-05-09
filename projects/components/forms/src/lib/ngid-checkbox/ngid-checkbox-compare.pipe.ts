import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngidCheckboxCompare',
})
export class NgidCheckboxComparePipe implements PipeTransform {
  transform(formControlValue: Array<any>, option: any): boolean {
    if (Array.isArray(formControlValue)) {
      return (
        formControlValue.filter(
          (value) => JSON.stringify(value) === JSON.stringify(option)
        ).length > 0
      );
    }
    return false;
  }
}
