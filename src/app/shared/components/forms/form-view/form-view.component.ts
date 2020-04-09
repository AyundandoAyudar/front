import { Component, OnInit, Input } from '@angular/core';
import { InputBase } from '../models/input-base';
import { FormUtilService, modeFrom } from '../form-util.service';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss'],
})
export class FormViewComponent<T> implements OnInit {
  mode: modeFrom = 'view';
  @Input() item: T;

  public inputs: InputBase[];
  @Input('schema') set schema(value: () => InputBase[]) {
    this.inputs = this.formUtilService.joinValues(value, this.item, this.mode);
  }

  constructor(public formUtilService: FormUtilService) {}

  ngOnInit() {}
}
