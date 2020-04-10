import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputBase } from './models/input-base';

export type modeFrom = 'new' | 'update' | 'view';
@Injectable()
export class FormUtilService {
  toFormGroup<T>(inputs: InputBase<T>[], mode: modeFrom = 'new') {
    const group: Record<string, FormControl> = {};

    inputs.forEach((input) => {
      if (input.required) {
        input.formOptions.validators.push(Validators.required);
      }
      group[input.key] = new FormControl(
        {
          value: input.value,
          disabled:
            input.disabled ||
            (mode === 'update' && input.mode === 'VIEW_ON_UPDATE'),
        },
        input.formOptions
      );
    });
    return new FormGroup(group);
  }

  /**
   * put the values in corresponding values insides de inputs
   */
  joinValues<T, R extends Record<string, any>>(
    schema: () => InputBase<T>[],
    values: R,
    mode: modeFrom
  ): InputBase<T>[] {
    if (schema) {
      const inputs = schema();
      inputs.forEach((element) => {
        element.value = values[element.key];
        if (mode === 'view') {
          element.disabled = true;
        }
      });
      return inputs;
    } else {
      return [];
    }
  }
}
