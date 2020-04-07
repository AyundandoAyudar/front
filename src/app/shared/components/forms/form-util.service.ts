import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputBase } from './models/input-base';

@Injectable()
export class FormUtilService {
  toFormGroup<T>(inputs: InputBase<T>[]) {
    const group: Record<string, FormControl> = {};

    inputs.forEach((input) => {
      if (input.required) {
        input.formOptions.validators.push(Validators.required);
      }
      group[input.key] = new FormControl(input.value || '', input.formOptions);
    });
    return new FormGroup(group);
  }
}
