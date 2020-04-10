import { InputDropdown } from '../components/forms/models/input-drop-down';
import { InputText } from '../components/forms/models/input-text';
import { Validators } from '@angular/forms';

export const PatientInputSchema = () => [
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
    mode: 'VIEW_ON_UPDATE',
    required: true,
  }),
  // Instance InputText with class
  new InputText({
    key: 'idNumber',
    label: 'Número de documento',
    mode: 'VIEW_ON_UPDATE',
    type: 'tel',
    required: true,
  }),
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
