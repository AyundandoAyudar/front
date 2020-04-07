import { Component, OnInit } from '@angular/core';
import { InputText } from '../../shared/components/forms/models/input-text';
import { InputBase } from '../../shared/components/forms/models/input-base';
@Component({
  selector: 'app-new-medicine',
  templateUrl: './new-medicine.component.html',
  styleUrls: ['./new-medicine.component.scss'],
})
export class NewMedicineComponent implements OnInit {
  inputs: InputBase[] = [
    // Instance InputText with class
    new InputText({
      key: 'name',
      label: 'Nombre',
      required: true,
    }),
    new InputText({
      key: 'packaging',
      label: 'Empaque',
      required: true,
    }),
    new InputText({
      key: 'invima',
      label: 'Invima',
    }),
    new InputText({
      key: 'components',
      label: 'Componentes',
      required: true,
    }),
    new InputText({
      key: 'annotations',
      label: 'Anotaciones',
      required: true,
    }),
  ];
  constructor() {}

  ngOnInit() {}
}
