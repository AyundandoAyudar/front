import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from './shared/services/auth.service';
import { StorageService } from './shared/services/storage.service';
import { PatientsService } from './shared/services/patients.service';
import { mockListOrders } from '../../__mocks__/models/mockListOrders';
import { OrdersService } from './shared/services/orders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AyudandoAyudar';
  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private patientsService: PatientsService,
    private orderService: OrdersService
  ) {
    // setTimeout(() => {
    //   const listOrders = mockListOrders();
    //   console.log({ listOrders });
    //   listOrders.forEach((item) => {
    //     this.orderService.createOrder(item);
    //   });
    // }, 2000);
  }
}
