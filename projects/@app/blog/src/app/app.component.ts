import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.setFormGroupState();
    console.log('Info: Come from ngOnInit');
    console.log(this.formGroup);
  }

  private setFormGroupState(): void {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('John Doe'),
      age: new FormControl(22),
      address: new FormControl('Pluto')
    });
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
