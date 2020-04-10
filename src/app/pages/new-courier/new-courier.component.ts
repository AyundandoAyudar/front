import { Component, OnInit } from '@angular/core';
import { InputText } from '../../shared/components/forms/models/input-text';
import { InputBase } from '../../shared/components/forms/models/input-base';

@Component({
  selector: 'app-new-courier',
  templateUrl: './new-courier.component.html',
  styleUrls: ['./new-courier.component.scss'],
})
export class NewCourierComponent implements OnInit {
  inputs: InputBase[] = [
    new InputText({
      key: 'name',
      label: 'Nombres y apellidos',
      required: true,
    }),
    new InputText({
      key: 'plate',
      label: 'Placa',
      required: true,
    }),
    new InputText({
      key: 'vehicle',
      label: 'Vehiculo',
      required: true,
    }),
    new InputText({
      key: 'company',
      label: 'Compañia',
      required: true,
    }),
  ];
  constructor() {}

  ngOnInit() {}
}
