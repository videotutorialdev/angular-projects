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

  public genderList: Array<Gender>;
  public skillList: Array<Skill>;

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
    ];

    this.skillList = [
      { id: 1, name: 'JavaScript' },
      { id: 2, name: 'NodeJS' },
      { id: 3, name: 'Angular' },
      { id: 4, name: 'ReactJS'}
    ];
  }

  private setFormGroupState(): void {
    this.formGroup = this.formBuilder.group({
      name: ['John Doe'],
      age: [22],
      address: ['Pluto'],
      gender: [{ id: 1, name: 'Male' }],
      skills: [null]
    });

    setTimeout(() => {
      console.log('Info: Come from response');
      this.formGroup.get('skills').patchValue(this.skillList);
    }, 5000)
  }

  public handleChangeGender(gender: Gender): void {
    this.formGroup.get('gender').patchValue(gender);
  }

  public handleChangeSkill(isChecked: boolean, index: number): void {
    const currentValue: Array<Skill> = this.formGroup.get('skills').value || [];
    isChecked 
    ? this.formGroup.get('skills').patchValue([...currentValue, this.skillList[index]])
    : this.formGroup.patchValue(currentValue.splice(index, 1));
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

  public isChecked(formControlValue: Array<Skill>, skill: Skill): boolean {
    return (formControlValue || []).findIndex(value => JSON.stringify(value) === JSON.stringify(skill)) !== -1;
  }
}

export interface BaseInterface {
  id: number;
  name: string;
}
interface Skill extends BaseInterface { }

interface Gender extends BaseInterface { }
