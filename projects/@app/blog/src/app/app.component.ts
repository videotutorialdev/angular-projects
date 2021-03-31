import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  public countryList: Array<Country>;

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

    this.countryList = [
      { id: 1, name: 'Indonesia' },
      { id: 2, name: 'Malaysia' },
      { id: 3, name: 'Singapura' },
      { id: 4, name: 'Filipina' },
      { id: 5, name: 'Thailand' },
      { id: 6, name: 'Brunei Darussalam' },
      { id: 7, name: 'Kamboja' },
    ]
  }

  private setFormGroupState(): void {
    this.formGroup = this.formBuilder.group({
      name: ['John Doe'],
      age: [22],
      address: ['Pluto'],
      gender: [{ id: 1, name: 'Male' }],
      skills: [null],
      country: [{ id: 1, name: 'Indonesia' }],
      questionAnswerList: this.formBuilder.array([]),
      hobbieList: this.formBuilder.array([])
    });

    this.questionAnswerListFormArray.push(this.formBuilder.group({
      question: ['What is the best programming language in the world?'],
      answer: ['NodeJS']
    }));

    this.hobbiesListFormArray.push(new FormControl('Code'));
  }

  public get questionAnswerListFormArray(): FormArray {
    return <FormArray>this.formGroup.get('questionAnswerList');
    
  }

  public get hobbiesListFormArray(): FormArray {
    return <FormArray>this.formGroup.get('hobbieList');
  }

  public handleAddNewQuestionAnswer(): void {
    this.questionAnswerListFormArray.push(this.formBuilder.group({
      question: [`Random Question ${this.questionAnswerListFormArray.length}`],
      answer: [null]
    }));
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

  public handleCompareCountry(firstCountry: Country, secondCountry: Country): boolean {
    return firstCountry && secondCountry ? firstCountry.id === secondCountry.id : firstCountry === secondCountry
  }
}

export interface BaseInterface {
  id: number;
  name: string;
}
interface Skill extends BaseInterface { }

interface Gender extends BaseInterface { }

interface Country extends BaseInterface {}
