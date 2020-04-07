import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from '../models/input-base';
import { InputTypes } from '../models/input-types.enum';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent<T> implements OnInit {
  @Input() input: InputBase<T>;
  @Input() form: FormGroup;
  get InputTypes() {
    return InputTypes;
  }
  get control() {
    return this.form.controls[this.input.key];
  }
  get isErrorRequired() {
    return this.control.errors && this.control.errors.required;
  }
  get isEmailError() {
    return this.control.errors && this.control.errors.email;
  }

  get errors() {
    return JSON.stringify(this.control.errors);
  }

  ngOnInit() {}
}
