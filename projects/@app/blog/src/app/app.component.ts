import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'ngid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Angular Reactive Form Tutorial';

  // public name = new FormControl('John Doe');
  // public age = new FormControl(22);
  // public address = new FormControl('Pluto');

  public formGroup: FormGroup;

  public genderList: Array<{id: number, name: string}>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.setInitializationState();
    this.setFormGroupState();
    console.log('Info: Come from ngOnInit');
    console.log(this.formGroup);
  }

  private setInitializationState(): void {
    this.genderList = [
      { id: 1, name: 'Male' },
      { id: 2, name: 'Female' },
    ]
  }

  private setFormGroupState(): void {
    this.formGroup = this.formBuilder.group({
      name: ['John Doe'],
      age: [22],
      address: ['Pluto'],
      gender: [{ id: 1, name: 'Male' }]
    });
  }

  public handleChangeGender(gender: {id: number, name: string}): void {
    this.formGroup.get('gender').patchValue(gender);
  }

  public handleCancel(): void {
    console.log('Info: Come from handleCancel');
  }

  public handleReset(): void {
    this.formGroup.reset();
  }

  public handleSubmit(): void {
    console.log('Info: Come from handleSubmit');
    console.log(this.formGroup.value);
  }
}
