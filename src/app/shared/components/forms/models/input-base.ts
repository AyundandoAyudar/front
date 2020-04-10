import { AbstractControlOptions, ValidatorFn } from '@angular/forms';
import { InputTypes } from './input-types.enum';

interface AbstractControlOptionsOnlyArray
  extends Partial<AbstractControlOptions> {
  validators: ValidatorFn[] | null;
}

type modeInput = 'ALL' | 'VIEW_ON_UPDATE';
export interface InputBase<T> {
  readonly controlType: InputTypes;
  value?: T;
  key?: string;
  label?: string;
  required?: boolean;
  order?: number;
  type?: string;
  iconPrefix?: string;
  options?: { value: T; text: string }[];
  mode?: modeInput;
  disabled?: boolean;
  formOptions: AbstractControlOptionsOnlyArray;
}
export class InputBase<T = unknown> {
  readonly controlType: InputTypes = InputTypes.InputBase;
  value?: T;
  key?: string;
  label?: string;
  required?: boolean;
  order?: number;
  type?: string;
  iconPrefix?: string;
  mode?: modeInput;
  disabled?: boolean;
  options?: { value: T; text: string }[];
  formOptions: AbstractControlOptionsOnlyArray;

  constructor(options: Partial<InputBase<T>> = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.type = options.type || '';
    this.iconPrefix = options.iconPrefix;
    this.mode = options.mode || 'ALL';
    this.disabled = options.disabled;
    const {
      asyncValidators,
      updateOn,
      validators = [],
    } = options.formOptions || {
      asyncValidators: undefined,
      updateOn: undefined,
    };
    this.formOptions = { asyncValidators, updateOn, validators };
  }
}
