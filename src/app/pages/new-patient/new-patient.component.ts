import { Component, OnInit } from '@angular/core';
import { InputDropdown } from '../../shared/components/forms/models/input-drop-down';
import { InputText } from '../../shared/components/forms/models/input-text';
import { InputBase } from '../../shared/components/forms/models/input-base';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss'],
})
export class NewPatientComponent implements OnInit {
  inputs: InputBase[] = [
    // Instance Dropdown with class
    new InputDropdown({
      key: 'tipo_documento',
      label: 'Tipo de documento',
      options: [
        { value: 'CEDULA', text: 'Cédula' },
        { value: 'CEDULA_EXTRANJERA', text: 'Cédula Extranjera' },
        { value: 'PASAPORTE', text: 'Pasaporte' },
        { value: 'REGISTRO_CIVIL', text: 'Registro civil' },
        { value: 'TARJETA_IDENTIDAD', text: 'Tarjeta identidad' },
      ],

      required: true,
    }),
    // Instance InputText with class
    new InputText({
      key: 'name',
      label: 'Nombres y apellidos',
      required: true,
    }),
    new InputText({
      key: 'birth_date',
      label: 'Fecha de nacimiento',
      type: 'date',
      required: true,
    }),
    new InputText({
      key: 'email',
      label: 'Email',
      formOptions: { validators: [Validators.email] },
      required: true,
    }),
    new InputText({
      key: 'address',
      label: 'Dirección',
      required: true,
    }),
    new InputText({
      key: 'addressAnnotation',
      label: 'Información adicional dirección',
    }),
    new InputText({
      key: 'phoneNumber',
      label: 'Telefono',
      required: true,
      type: 'tel',
    }),
    new InputText({
      key: 'otherPhone',
      label: 'Otro telefono',
      type: 'tel',
    }),
  ];
  ngOnInit() {}
}
