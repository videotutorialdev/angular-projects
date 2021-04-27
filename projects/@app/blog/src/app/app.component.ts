import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';
import { Validators } from 'validators';
@Component({
  selector: 'ngid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'Angular Reactive Form Tutorial';

  // public name = new FormControl('John Doe');
  // public age = new FormControl(22);
  // public address = new FormControl('Pluto');

  public formGroup: FormGroup;

  public genderList: Array<Gender>;
  public skillList: Array<Skill>;
  public countryList: Array<Country>;

  public isDisabled: Boolean;

  public formControlName: FormControl = new FormControl(null);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.setInitializationState();
    this.setFormGroupState();
    console.log('Info: Come from ngOnInit');
    console.log(this.formGroup);
    console.log(this.formControlName);
  }

  public handleDisableOrEnableForm(): void {
    this.isDisabled = !this.isDisabled;
    if (this.formControlName.value) {
      if (this.formGroup.get(this.formControlName.value)) {
        this.isDisabled
          ? this.formGroup.get(this.formControlName.value).disable()
          : this.formGroup.get(this.formControlName.value).enable();
      }
    } else {
      this.isDisabled ? this.formGroup.disable() : this.formGroup.enable();
    }
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
      { id: 4, name: 'ReactJS' },
    ];

    this.countryList = [
      { id: 1, name: 'Indonesia' },
      { id: 2, name: 'Malaysia' },
      { id: 3, name: 'Singapura' },
      { id: 4, name: 'Filipina' },
      { id: 5, name: 'Thailand' },
      { id: 6, name: 'Brunei Darussalam' },
      { id: 7, name: 'Kamboja' },
    ];
  }

  private setFormGroupState(): void {
    this.formGroup = this.formBuilder.group({
      name: [
        null,
        [
          Validators.required(),
          Validators.minLength(
            4,
            'Name Length Should Not Less Than 4 Characters'
          ),
          Validators.maxLength(
            7,
            'Name Length Should Not Greater Than 7 Characters'
          ),
        ],
      ],
      email: [null, [Validators.required(), Validators.email()]],
      password: [
        null,
        [
          Validators.required(),
          Validators.minLength(7),
          Validators.maxLength(11),
        ],
      ],
      confirmPassword: [null, [Validators.required(), Validators.matchPassword()]],
      birthDate: [
        null,
        [
          Validators.required(),
          Validators.pattern(/\d{4}/g, "Birth Date Must Be An Integer"),
          Validators.min(new Date().getFullYear() - 100),
          Validators.max(new Date().getFullYear() - 21),
        ],
      ],
      yearOfBirth: [
        null,
        [
          Validators.required(),
          Validators.min(new Date().getFullYear() - 100),
          Validators.max(new Date().getFullYear() - 18, "Must be 18 Years Old"),
        ],
      ],
      age: [null, Validators.required()],
      address: [null, Validators.required()],
      gender: [null, Validators.required()],
      skills: [null, Validators.required()],
      country: [null, Validators.required()],
      questionAnswerList: this.formBuilder.array([]),
      hobbieList: this.formBuilder.array([]),
      captcha: [null, this.myCustomValidator(1234)],
    });

    this.questionAnswerListFormArray.push(
      this.formBuilder.group({
        question: ['What is the best programming language in the world?'],
        answer: ['NodeJS'],
      })
    );

    this.hobbiesListFormArray.push(new FormControl('Code'));
  }

  public myCustomValidator(captchaAnswer: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (
        !control.value ||
        (control.value && control.value !== captchaAnswer.toString())
      ) {
        return {
          message: 'Oooppsss...!!! Invalid Captcha Answer',
        };
      }
      return null;
    };
  }

  public handleCancel(): void {
    console.log('Info: Come from handleCancel');
  }

  public handleReset(): void {
    this.formGroup.reset();
  }

  public handleSubmit(): void {
    this.formGroup.markAllAsTouched();
    console.log('Info: Come from handleSubmit');
    console.log(this.formGroup);
  }

  public get questionAnswerListFormArray(): FormArray {
    return <FormArray>this.formGroup.get('questionAnswerList');
  }

  public get hobbiesListFormArray(): FormArray {
    return <FormArray>this.formGroup.get('hobbieList');
  }

  public handleAddNewQuestionAnswer(): void {
    this.questionAnswerListFormArray.push(
      this.formBuilder.group({
        question: [
          `Random Question ${this.questionAnswerListFormArray.length}`,
        ],
        answer: [null],
      })
    );
  }

  public handleAddNewHobbie(): void {
    this.hobbiesListFormArray.push(new FormControl(null));
  }

  public handleDeleteQuestionAnswerItem(index: number): void {
    this.questionAnswerListFormArray.removeAt(index);
  }

  public handleDeleteHobbieItem(index: number): void {
    this.hobbiesListFormArray.removeAt(index);
  }

  public handleChangeGender(gender: Gender): void {
    this.formGroup.get('gender').patchValue(gender);
  }

  public handleChangeSkill(isChecked: boolean, index: number): void {
    this.formGroup.get('skills').markAsTouched();
    const currentValue: Array<Skill> = this.formGroup.get('skills').value || [];
    isChecked
      ? this.formGroup
          .get('skills')
          .patchValue([...currentValue, this.skillList[index]])
      : this.formGroup.patchValue(currentValue.splice(index, 1));

    if (this.formGroup.get('skills').value.length === 0) {
      this.formGroup.get('skills').patchValue(null);
    }
  }

  public isChecked(formControlValue: Array<Skill>, skill: Skill): boolean {
    return (
      (formControlValue || []).findIndex(
        (value) => JSON.stringify(value) === JSON.stringify(skill)
      ) !== -1
    );
  }

  public handleCompareCountry(
    firstCountry: Country,
    secondCountry: Country
  ): boolean {
    return firstCountry && secondCountry
      ? firstCountry.id === secondCountry.id
      : firstCountry === secondCountry;
  }
}

export interface BaseInterface {
  id: number;
  name: string;
}
interface Skill extends BaseInterface {}

interface Gender extends BaseInterface {}

interface Country extends BaseInterface {}
