import { Component, OnInit } from '@angular/core';

import { PatientInputSchema } from '../../shared/schemas/patient.schema';
import { InputBase } from '../../shared/components/forms/models/input-base';
import { Patient } from '../../shared/models/patient.model';
import { PatientsService } from '../../shared/services/patients.service';
import { SpinnerService } from '../../shared/services/spinner.service';
import { MatSnackBar } from '@angular/material';
import { FormUtilService } from '../../shared/components/forms/form-util.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss'],
})
export class NewPatientComponent implements OnInit {
  inputs: InputBase[] = PatientInputSchema();
  form = this.fus.toFormGroup(this.inputs);

  constructor(
    private patientsService: PatientsService,
    private spinnerService: SpinnerService,
    private snackBar: MatSnackBar,
    private fus: FormUtilService
  ) {}
  // Use arrow function to not lose context
  onSubmit = (values: Record<keyof Patient, string>) => {
    console.debug('NewPatientComponent:onSubmit', { values });
    this.spinnerService.openAlertDialog();
    this.patientsService
      .createPatient(new Patient(values))
      .then((doc) => {
        this.snackBar.open('Paciente creado', null, { duration: 2000 });
        this.form.reset();
      })
      .catch((error) => {
        console.debug('[ERROR]', { error });
        this.snackBar.open(
          'Lo siento no hemos podido crear tú paciente',
          null,
          { duration: 2000 }
        );
      })
      .finally(() => {
        this.spinnerService.close();
      });
  };

  onSecondary = () => {
    this.form.reset();
  };

  ngOnInit() {}
}
