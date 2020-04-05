import { InputBase } from './input-base';
import { InputTypes } from './input-types.enum';

export class InputDropdown<T> extends InputBase<T> {
  readonly controlType = InputTypes.DropDown;
  options: { value: T; text: string }[] = [];

  constructor(options: Partial<InputDropdown<T>> = {}) {
    super(options);
    this.options = options.options || [];
  }
}
