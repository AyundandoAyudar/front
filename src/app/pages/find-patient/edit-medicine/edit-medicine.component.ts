import { Component, OnInit, Input } from '@angular/core';
import { Patient, MedicinePatient } from '../../../shared/models/patient.model';
import { InputBase } from '../../../shared/components/forms/models/input-base';
import { FormUtilService } from '../../../shared/components/forms/form-util.service';
import { MedicinePatientInputSchema } from '../../../shared/schemas/medicinePatient';
import { MedicineService } from '../../../shared/services/medicine.service';
import { Medicine } from '../../../shared/models/medicine.model';
import { PatientsService } from '../../../shared/services/patients.service';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { MatSnackBar } from '@angular/material';

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
    private medicineService: MedicineService,
    private patientsService: PatientsService,
    private spinnerService: SpinnerService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.medicineService.allMedicines$.subscribe((list) => {
      this.inputs = MedicinePatientInputSchema(list);
      this.form = this.fus.toFormGroup(this.inputs);
    });
  }

  deleteMedicinePatient = (medicinePatient) => {
    // remove medicinePatient of list
    console.debug('EditMedicineComponent:deleteMedicinePatient', {
      medicinePatient,
    });
    this.patient.medicines = this.patient.medicines.filter(
      (medicine) => medicine !== medicinePatient
    );
    this.updatePatient();
  };

  onCancelNew = () => {
    this.addMode = false;
  };

  onSubmitNew = (values: {
    medicineId: string;
    name: string;
    'dosage.frequency': string;
    'dosage.quantity': string;
  }) => {
    console.debug('EditMedicineComponent:deleteMedicinePatient', { values });
    const medicinePatient = {
      name: values.name,
      medicineId: values.medicineId,
      dosage: {
        frequency: values['dosage.frequency'],
        quantity: values['dosage.quantity'],
      },
    };
    if (this.patient.medicines) {
      this.patient.medicines.push(medicinePatient);
    } else {
      this.patient.medicines = [medicinePatient];
    }
    this.updatePatient();
  };

  updatePatient() {
    this.spinnerService.openAlertDialog();
    this.patientsService
      .updatePatient(new Patient(this.patient))
      .then((doc) => {
        this.snackBar.open('Paciente actualizada', null, { duration: 2000 });
      })
      .catch((error) => {
        console.debug('[ERROR]', { error });
        this.snackBar.open('Lo siento ha ocurrido un error', null, {
          duration: 2000,
        });
      })
      .finally(() => {
        this.spinnerService.close();
      });
  }
}
