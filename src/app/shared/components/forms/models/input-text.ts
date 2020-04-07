import { InputBase } from './input-base';
import { InputTypes } from './input-types.enum';

export class InputText extends InputBase<string> {
  readonly controlType = InputTypes.InputText;
  type: string;

  constructor(options: Partial<InputText> = {}) {
    super(options);
    this.type = options.type || '';
  }
}
