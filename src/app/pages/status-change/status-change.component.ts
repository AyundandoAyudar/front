import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { SpinnerService } from '../../shared/services/spinner.service';
import { OrdersService } from '../../shared/services/orders.service';
import { PatientsService } from '../../shared/services/patients.service';
import { Observable } from 'rxjs';
import { Order, OrderStatus } from '../../shared/models/order.model';

@Component({
  selector: 'app-status-change',
  templateUrl: './status-change.component.html',
  styleUrls: ['./status-change.component.scss'],
})
export class StatusChangeComponent implements OnInit {
  orders$: Observable<Order[]>;
  itemSelected: Order;
  optionsStatus = Object.values(OrderStatus);

  constructor(
    private snackBar: MatSnackBar,
    private spinnerService: SpinnerService,
    private ordersService: OrdersService
  ) {}

  ngOnInit() {
    this.orders$ = this.ordersService.getOrders(); // Filter me
  }

  save(item: Order) {
    console.debug('StatusChangeComponent:save', { item });
    this.spinnerService.openAlertDialog();
    this.ordersService
      .updateOrder(item)
      .then((doc) => {
        this.snackBar.open('Orden actualizada', null, { duration: 2000 });
      })
      .catch((error) => {
        console.debug('[ERROR]', { error });
        this.snackBar.open(
          'Lo siento no hemos podido actualizar tu orden',
          null,
          { duration: 2000 }
        );
      })
      .finally(() => {
        this.spinnerService.close();
      });
  }
}
