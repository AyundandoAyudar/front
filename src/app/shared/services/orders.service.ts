import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
  QueryFn,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { Order, OrderStatus } from '../models/order.model';
import { Deserializable } from '../models/deserializable.model';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(
    private firestore: AngularFirestore,
    public snackBar: MatSnackBar
  ) {
    this.getActiveOrders().subscribe(this.checkOrdersOpen);
  }

  // ------------------------------ Orders ----------------------------------

  ordersCollection: AngularFirestoreCollection<Order>;
  orders: Observable<Order[]>;
  ordersAreStillOpen = false;

  createOrder(order: Order): Promise<DocumentReference> {
    if (this.ordersAreStillOpen) {
      return Promise.reject(
        'Tienes órdenes pendientes por cerrar, por favor revisalas'
      );
    }
    return this.firestore.collection('orders').add({ ...order });
  }

  getOrders(queryFn?: QueryFn) {
    this.ordersCollection = queryFn
      ? this.firestore.collection<Order>('orders', queryFn)
      : this.firestore.collection<Order>('orders');

    this.orders = this.ordersCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          // Explicitly create an instance so we can ensure it fits the class
          const data = new Order(a.payload.doc.data());
          data.id = a.payload.doc.id;
          return data;
        })
      )
    );

    return this.orders;
  }

  getOrdersByOrderID(id: number) {
    const orderRef = this.firestore.collection<Order>('orders', (ref) =>
      ref.where('orderId', '==', +id)
    );

    return orderRef
      .get()
      .toPromise()
      .then(
        (result) =>
          new Order({ ...result.docs[0].data(), id: result.docs[0].id })
      );
  }

  getActiveOrders() {
    const todayZeroHrs = moment(moment().format('L'));
    return this.getOrders((ref) =>
      ref
        .where('status', '==', OrderStatus.Open)
        .orderBy('scheduleDate')
        .endAt(todayZeroHrs.format())
    ).pipe(
      // ? We can`t do multiple range filters per query :(
      // ? So I add front filter to do it
      map((orders) =>
        orders
          .filter(
            (order) =>
              !(
                order.deleted_at &&
                moment(order.deleted_at).isBefore(todayZeroHrs)
              )
          )
          .filter(
            (order) =>
              !(
                order.canceledDate &&
                moment(order.canceledDate).isBefore(todayZeroHrs)
              )
          )
      )
    );
  }

  updateOrder(order: Order) {
    if (this.ordersAreStillOpen) {
      return Promise.reject(
        'Tienes órdenes pendientes por cerrar, por favor revisalas'
      );
    }
    Deserializable.cleanNull(order);
    return this.firestore.doc('orders/' + order.id).update({ ...order });
  }

  deleteOrder(orderId: string) {
    let order = new Order({ id: orderId, deleted_at: new Date() });
    return this.updateOrder(order);
  }

  checkOrdersOpen = (orders: Order[]) => {
    if (orders.length) {
      // 1 o more orders pendent
      this.ordersAreStillOpen = true;
      this.snackBar.open(
        'Tienes órdenes pendientes por cerrar, por favor revisalas',
        'X',
        {}
      );
    }
  };

  // --------------------------------------------------------------------------
}
