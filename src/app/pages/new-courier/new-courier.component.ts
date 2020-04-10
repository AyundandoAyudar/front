import { Component, OnInit } from '@angular/core';

import { CourierInputSchema } from '../../shared/schemas/courier.schema';
import { InputBase } from '../../shared/components/forms/models/input-base';
import { SpinnerService } from '../../shared/services/spinner.service';
import { MatSnackBar } from '@angular/material';
import { FormUtilService } from '../../shared/components/forms/form-util.service';
import { CourierService } from '../../shared/services/courier.service';
import { Courier } from '../../shared/models/courier.model';

@Component({
  selector: 'app-new-courier',
  templateUrl: './new-courier.component.html',
  styleUrls: ['./new-courier.component.scss'],
})
export class NewCourierComponent implements OnInit {
  inputs: InputBase[] = CourierInputSchema();
  form = this.fus.toFormGroup(this.inputs);

  constructor(
    private courierService: CourierService,
    private spinnerService: SpinnerService,
    private snackBar: MatSnackBar,
    private fus: FormUtilService
  ) {}
  // Use arrow function to not lose context
  onSubmit = (values: Record<keyof Courier, string>) => {
    console.debug('NewCourierComponent:onSubmit', { values });
    this.spinnerService.openAlertDialog();
    this.courierService
      .createCourier(new Courier(values))
      .then((doc) => {
        this.snackBar.open('Mensajero creado', null, { duration: 2000 });
        this.form.reset();
      })
      .catch((error) => {
        console.debug('[ERROR]', { error });
        this.snackBar.open(
          'Lo siento no hemos podido crear tú mensajero',
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
