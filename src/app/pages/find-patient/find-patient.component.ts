import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../shared/services/patients.service';
import { of, Observable } from 'rxjs';
import { Patient } from '../../shared/models/patient.model';
import { PatientInputSchema } from '../../shared/schemas/patient.schema';
import { SpinnerService } from '../../shared/services/spinner.service';
import { MatSnackBar } from '@angular/material';
import { MedicineService } from '../../shared/services/medicine.service';
import { Medicine } from '../../shared/models/medicine.model';

@Component({
  selector: 'app-find-patient',
  templateUrl: './find-patient.component.html',
  styleUrls: ['./find-patient.component.scss'],
})
export class FindPatientComponent implements OnInit {
  constructor(
    private patientsService: PatientsService,
    private medicineService: MedicineService,
    private spinnerService: SpinnerService,
    private snackBar: MatSnackBar
  ) {}

  list$: Observable<Patient[]> = this.patientsService.patients; // FIXME:  of([])
  listMedicines$: Observable<Medicine[]> = this.medicineService.medicines;
  schema = PatientInputSchema;

  ngOnInit() {}

  onSearch = (values: { search: string }) => {
    console.debug('FindPatientComponent:onSearch');
    this.list$ = this.patientsService.getPatients((ref) =>
      ref.where('idNumber', '==', values.search)
    );
  };

  onEdit = (item: Patient, oldItem: Patient) => {
    console.debug('FindPatientComponent:onEdit', { item, oldItem });
    this.spinnerService.openAlertDialog();
    this.patientsService
      .updatePatient(new Patient({ ...oldItem, ...item }))
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
  };

  onDelete = (item: Patient) => {
    console.debug('FindPatientComponent:onDelete', { item });
    this.spinnerService.openAlertDialog();
    this.patientsService
      .deletePatient(new Patient(item).id)
      .then((doc) => {
        this.snackBar.open('Paciente eliminado', null, { duration: 2000 });
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
  };
}
