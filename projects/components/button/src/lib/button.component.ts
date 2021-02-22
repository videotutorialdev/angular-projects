import { Component, Input, OnInit } from '@angular/core';
import { ButtonSize } from './types/button-size.type';
import { ButtonColor } from './types/button-color.type';
@Component({
  selector: 'ngid-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() size: ButtonSize;
  @Input() color: ButtonColor;
  @Input() disabled: boolean;

  public btnClassName: string;

  private BUTTON_SIZE = {
    SM: 'btn-sm',
    MD: 'btn-md',
    LG: 'btn-lg'
  };

  private BUTTON_COLOR = {
    PRIMARY: 'btn-primary',
    SECONDARY: 'btn-secondary',
    SUCCESS: 'btn-success',
    WARNING: 'btn-warning',
    DANGER: 'btn-danger',
    DARK: 'btn-dark',
    LIGHT: 'btn-light'
  };

  constructor() { }

  ngOnInit(): void {
    this.initializeButton();
    this.setButtonSize();
    this.setButtonColor();
  }

  private initializeButton(): void {
    this.btnClassName = `btn `;
  }

  private setButtonSize(): void {
    const buttonSize: ButtonSize = this.size || 'MD';
    this.btnClassName += `${this.BUTTON_SIZE[buttonSize]} `;
  }

  private setButtonColor(): void {
    const buttonColor: ButtonColor = this.color || 'PRIMARY';
    this.btnClassName += `${this.BUTTON_COLOR[buttonColor]}`;
  }

}
