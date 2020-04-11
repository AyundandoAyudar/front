import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../../../shared/models/patient.model';
import { InputBase } from '../../../shared/components/forms/models/input-base';
import { FormUtilService } from '../../../shared/components/forms/form-util.service';
import { MedicinePatientInputSchema } from '../../../shared/schemas/medicinePatient';
import { MedicineService } from '../../../shared/services/medicine.service';
import { Medicine } from '../../../shared/models/medicine.model';

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.scss'],
})
export class EditMedicineComponent implements OnInit {
  @Input() patient: Patient;
  @Input() medicines: Medicine[] = [];

  inputs: InputBase[];
  form;

  addMode = false;
  constructor(
    private fus: FormUtilService,
    private medicineService: MedicineService
  ) {}

  ngOnInit() {
    this.medicineService.allMedicines$.subscribe((list) => {
      this.inputs = MedicinePatientInputSchema(list);
      this.form = this.fus.toFormGroup(this.inputs);
    });
  }

  deleteMedicinePatient(medicinePatient) {
    console.debug('EditMedicineComponent:deleteMedicinePatient', {
      medicinePatient,
    });
  }

  onCancelNew = () => {
    this.addMode = false;
  };

  onSubmitNew(values) {
    console.debug('EditMedicineComponent:deleteMedicinePatient', { values });
  }
}
