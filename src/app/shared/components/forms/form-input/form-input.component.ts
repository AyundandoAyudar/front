import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from '../models/input-base';
import { InputTypes } from '../models/input-types.enum';
import { modeFrom } from '../form-util.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent<T> implements OnInit {
  @Input() input: InputBase<T>;
  @Input() form: FormGroup;
  @Input() mode: modeFrom;
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
  get disabled() {
    return !!(
      this.mode === 'view' ||
      (this.input.mode === 'VIEW_ON_UPDATE' && this.mode === 'update')
    );
  }

  get errors() {
    return JSON.stringify(this.control.errors);
  }

  ngOnInit() {}
}
