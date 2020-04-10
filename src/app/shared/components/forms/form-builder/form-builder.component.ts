import { Component, OnInit, Input } from '@angular/core';
import { FormUtilService, modeFrom } from '../form-util.service';
import { InputBase } from '../models/input-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  providers: [FormUtilService],
})
export class FormBuilderComponent<T> implements OnInit {
  form: FormGroup;
  payLoad = '';
  /** mode update */
  @Input() mode: modeFrom = 'new';
  @Input() inputs: InputBase<T>[] = [];
  @Input() textPrimary = 'Guardar';
  @Input() textSecondary = 'Cancelar';

  @Input() onSubmit = (values: Record<string, T>) => {
    this.payLoad = JSON.stringify(values);
    console.debug('FormBuilderComponent:onSubmit:NOT_OVERLOAD');
  };

  @Input() onSecondary = () => {
    console.debug('FormBuilderComponent:onSecondary:NOT_OVERLOAD');
  };

  constructor(private fus: FormUtilService) {}

  ngOnInit() {
    this.form = this.fus.toFormGroup(this.inputs, this.mode);
    console.debug('FormBuilderComponent:', {
      form: this.form,
      inputs: this.inputs,
    });
  }
}
