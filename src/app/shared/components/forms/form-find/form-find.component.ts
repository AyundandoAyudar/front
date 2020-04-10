import { Component, OnInit, Input } from '@angular/core';
import { FormUtilService } from '../form-util.service';
import { InputBase } from '../models/input-base';
import { FormGroup } from '@angular/forms';
import { InputText } from '../models/input-text';

@Component({
  selector: 'app-form-find',
  templateUrl: './form-find.component.html',
  styleUrls: ['./form-find.component.scss'],
  providers: [FormUtilService],
})
export class FormFindComponent implements OnInit {
  form: FormGroup;
  payLoad = '';

  @Input() inputs: InputBase<string>[] = [
    new InputText({
      key: 'search',
      label: 'Buscar',
      iconPrefix: 'search',
    }),
  ];
  @Input() textPrimary = 'Buscar';

  @Input() onSubmit = (values: Record<string, string>) => {
    this.payLoad = JSON.stringify(values);
    console.debug('FormFindComponent:onSubmit:NOT_OVERLOAD');
  };

  constructor(private fus: FormUtilService) {}

  ngOnInit() {
    this.form = this.fus.toFormGroup(this.inputs);
    console.debug('FormFindComponent:', {
      form: this.form,
      inputs: this.inputs,
    });
  }
}
