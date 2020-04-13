import { InputDropdown } from '../components/forms/models/input-drop-down';
import { InputText } from '../components/forms/models/input-text';
import { Validators } from '@angular/forms';

export const CourierInputSchema = () =>
  // Instance InputText with class
  [
    new InputText({
      key: 'idNumber',
      label: 'Identificación',
      required: true,
    }),
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
