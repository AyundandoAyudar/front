import { Component, OnInit } from '@angular/core';
import { CourierService } from '../../shared/services/courier.service';
import { SpinnerService } from '../../shared/services/spinner.service';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { Courier } from '../../shared/models/courier.model';
import { CourierInputSchema } from '../../shared/schemas/courier.schema';

@Component({
  selector: 'app-find-courier',
  templateUrl: './find-courier.component.html',
  styleUrls: ['./find-courier.component.scss'],
})
export class FindCourierComponent implements OnInit {
  constructor(
    private courierService: CourierService,
    private spinnerService: SpinnerService,
    private snackBar: MatSnackBar
  ) {}
  list$: Observable<Courier[]> = this.courierService.couriers; // FIXME:  of([])
  schema = CourierInputSchema;

  ngOnInit() {}

  onSearch = (values: { search: string }) => {
    console.debug('FindCourierComponent:onSearch');
    this.list$ = this.courierService.getCouriers((ref) =>
      ref.where('plate', '==', values.search)
    );
  };

  onEdit = (item: Courier, oldItem: Courier) => {
    console.debug('FindCourierComponent:onEdit', { item, oldItem });
    this.spinnerService.openAlertDialog();
    this.courierService
      .updateCourier(new Courier({ ...oldItem, ...item }))
      .then((doc) => {
        this.snackBar.open('Mensajero actualizada', null, { duration: 2000 });
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

  onDelete = (item: Courier) => {
    console.debug('FindCourierComponent:onDelete', { item });
    this.spinnerService.openAlertDialog();
    this.courierService
      .deleteCourier(new Courier(item).id)
      .then((doc) => {
        this.snackBar.open('Mensajero eliminado', null, { duration: 2000 });
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
