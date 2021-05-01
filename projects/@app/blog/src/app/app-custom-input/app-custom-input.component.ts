import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
    AbstractControl,
    ControlContainer,
    ControlValueAccessor,

    FormGroup,
    NG_VALUE_ACCESSOR
} from '@angular/forms';
@Component({
  selector: 'app-custom-input',
  templateUrl: './app-custom-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppCustomInputComponent),
      multi: true,
    },
  ],
})
export class AppCustomInputComponent implements OnInit, ControlValueAccessor {
  @Input() formControlName: string;
  @Input() placeholder: string;
  @Input() type: string;

  public value: any;
  public isDisabled: boolean;

  public onChange: (value: string) => void;
  public onTouched: (value: string) => void;

  public formGroup: FormGroup;
  public formControl: AbstractControl;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit() {
    this.setFormGroupState();
    this.setFormControlState();
  }

  private setFormGroupState(): void {
    this.formGroup = this.controlContainer.control as FormGroup;
  }

  private setFormControlState(): void {
      this.formControl = this.formGroup.get(this.formControlName);
  }

  public get isValid(): boolean {
      return (this.formControl.dirty || this.formControl.touched) && this.formControl.valid;
  }

  public get isInvalid(): boolean {
    return (this.formControl.dirty || this.formControl.touched) && this.formControl.invalid;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
