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
  get isValid() {
    return this.form.controls[this.input.key].valid;
  }

  ngOnInit() {}
}
