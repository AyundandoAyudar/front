import { InputDropdown } from '../components/forms/models/input-drop-down';
import { InputText } from '../components/forms/models/input-text';
import { Medicine } from '../models/medicine.model';

export const MedicinePatientInputSchema = (medicines: Medicine[]) => [
  // Instance InputText with class
  new InputDropdown({
    key: 'medicineId',
    label: 'Medicina',
    options: medicines.map((item) => ({ text: item.name, value: item.id })),
    required: true,
  }),
  new InputText({
    key: 'name',
    label: 'Nombre',
    required: true,
  }),
  new InputText({
    key: 'dosage.frequency',
    label: 'Frecuencia',
    required: true,
  }),
  new InputText({
    key: 'dosage.quantity',
    label: 'Cantidad',
    required: true,
  }),
];
