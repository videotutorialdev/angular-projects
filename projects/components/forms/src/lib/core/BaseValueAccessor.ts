import { Component, forwardRef, Input, OnInit, Provider } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

export function makeProvider(componentTarget: any): Provider {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => componentTarget),
    multi: true,
  };
}

@Component({
  template: '',
})
export abstract class BaseValueAccessor
  implements OnInit, ControlValueAccessor {
  @Input() formControlName: string;
  @Input() placeholder: string;
  @Input() type: string;
  @Input() size: 'SM' | 'MD' | 'LG';
  @Input() options: Array<any>;
  @Input() optionViewPath: string;
  @Input() optionValuePath: string;

  public value: any;
  public isDisabled: boolean;

  public onChange: (value: string) => void;
  public onTouched: (value: string) => void;

  public formGroup: FormGroup;
  public formControl: AbstractControl;

  public classNameSize: string;

  protected abstract onInit(): void;

  private classNameObjectValue = {
    SM: 'form-control-sm',
    MD: 'form-control-md',
    LG: 'form-control-lg',
  };

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit() {
    this.setFormGroupState();
    this.setFormControlState();
    this.setClassNameSizeState();
    this.onInit();
  }

  private setFormGroupState(): void {
    this.formGroup = this.controlContainer.control as FormGroup;
  }

  private setFormControlState(): void {
    this.formControl = this.formGroup.get(this.formControlName);
  }

  private setClassNameSizeState(): void {
    const size = this.size || 'MD';
    this.classNameSize = this.classNameObjectValue[size];
  }

  public get isValid(): boolean {
    return (
      (this.formControl.dirty || this.formControl.touched) &&
      this.formControl.valid
    );
  }

  public get isInvalid(): boolean {
    return (
      (this.formControl.dirty || this.formControl.touched) &&
      this.formControl.invalid
    );
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
