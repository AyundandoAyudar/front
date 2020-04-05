import { Component, OnInit, Input } from '@angular/core';
import { FormUtilService } from '../form-util.service';
import { InputBase } from '../models/input-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  providers: [FormUtilService],
})
export class FormBuilderComponent<T> implements OnInit {
  @Input() inputs: InputBase<T>[] = [];
  form: FormGroup;
  payLoad = '+5+646';

  constructor(private fus: FormUtilService) {}

  ngOnInit() {
    this.form = this.fus.toFormGroup(this.inputs);
    console.log({ form: this.form, q: this.inputs });
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
