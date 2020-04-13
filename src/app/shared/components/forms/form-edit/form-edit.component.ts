import { Component, OnInit, Input } from '@angular/core';
import { InputBase } from '../models/input-base';
import { FormUtilService, modeFrom } from '../form-util.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss'],
})
export class FormEditComponent<T> implements OnInit {
  mode: modeFrom = 'update';
  @Input() item: T;

  private inputsPrivate: InputBase[];
  @Input('schema') set schema(value: () => InputBase[] | undefined) {
    this.inputsPrivate = this.formUtilService.joinValues(
      value,
      this.item,
      this.mode
    );
  }
  get inputs(): InputBase[] {
    return this.inputsPrivate;
  }

  @Input() onSubmit = (values: Record<string, any>, oldItem = this.item) => {
    console.debug('FormEditComponent:onSubmit:NOT_OVERLOAD', {
      values,
      oldItem,
    });
  };
  privateOnSubmit = (values: Record<string, any>, oldItem = this.item) =>
    this.onSubmit(values, oldItem);

  @Input() onSecondary = () => {
    console.debug('FormEditComponent:onSecondary:NOT_OVERLOAD');
  };
  constructor(public formUtilService: FormUtilService) {}

  ngOnInit() {}
}
