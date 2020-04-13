import { InputDropdown } from '../components/forms/models/input-drop-down';
import { InputText } from '../components/forms/models/input-text';
import { Validators } from '@angular/forms';

export const MedicineInputSchema = () => [
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
  }),
];
