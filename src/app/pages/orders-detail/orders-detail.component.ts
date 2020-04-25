import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../shared/services/orders.service';
import { Order } from '../../shared/models/order.model';
import { PatientsService } from '../../shared/services/patients.service';
import { Patient } from '../../shared/models/patient.model';
import { SpinnerService } from '../../shared/services/spinner.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['./orders-detail.component.scss'],
})
export class OrdersDetailComponent implements OnInit {
  id: string;
  private sub: any;
  order: Order;
  patient: Patient;

  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private spinnerService: SpinnerService,
    private ordersService: OrdersService,
    private patientsService: PatientsService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params.id;
      this.loadOrder();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadOrder() {
    console.debug('OrdersDetailComponent:loadOrder', { id: this.id });

    this.spinnerService.openAlertDialog();
    return (
      this.ordersService
        // (+) converts string 'id' to a number
        .getOrdersByOrderID(+this.id)
        .then((order) => {
          console.debug('OrdersDetailComponent:loadOrder', { order });

          this.order = order;
          return this.patientsService.getPatientsByID(
            this.order.patientIdNumber
          );
        })
        .then((patient) => {
          this.patient = patient;
        })
        .catch((error) => {
          console.debug('[ERROR] OrdersDetailComponent:loadOrder', { error });

          this.snackBar.open(
            'Lo siento no hemos podido cargar tu orden, intentalo de nuevo',
            null,
            { duration: 2000 }
          );
        })
        .finally(() => this.spinnerService.close())
    );
  }
}
