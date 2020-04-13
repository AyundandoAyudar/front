import { Component, OnInit } from '@angular/core';

import { MedicineInputSchema } from '../../shared/schemas/medicine.schema';
import { SpinnerService } from '../../shared/services/spinner.service';
import { MatSnackBar } from '@angular/material';
import { FormUtilService } from '../../shared/components/forms/form-util.service';
import { InputBase } from '../../shared/components/forms/models/input-base';
import { MedicineService } from '../../shared/services/medicine.service';
import { Medicine } from '../../shared/models/medicine.model';
@Component({
  selector: 'app-new-medicine',
  templateUrl: './new-medicine.component.html',
  styleUrls: ['./new-medicine.component.scss'],
})
export class NewMedicineComponent implements OnInit {
  inputs: InputBase[] = MedicineInputSchema();
  form = this.fus.toFormGroup(this.inputs);

  constructor(
    private medicineService: MedicineService,
    private spinnerService: SpinnerService,
    private snackBar: MatSnackBar,
    private fus: FormUtilService
  ) {}
  // Use arrow function to not lose context
  onSubmit = (values: Record<keyof Medicine, string>) => {
    console.debug('NewMedicineComponent:onSubmit', { values });
    this.spinnerService.openAlertDialog();
    this.medicineService
      .createMedicine(new Medicine(values))
      .then((doc) => {
        this.snackBar.open('Medicina creada', null, { duration: 2000 });
        this.form.reset();
      })
      .catch((error) => {
        console.debug('[ERROR]', { error });
        this.snackBar.open(
          'Lo siento no hemos podido crear tú medicina',
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
