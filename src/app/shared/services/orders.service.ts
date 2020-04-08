import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference, QueryFn} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Order} from "../models/order.model";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private firestore: AngularFirestore) { }


    // ------------------------------ Orders ----------------------------------

    ordersCollection: AngularFirestoreCollection<Order>;
    orders: Observable<Order[]>;

    createOrder(order: Order): Promise<DocumentReference>{
        return this.firestore.collection('orders').add({...order});
    }

    getOrders(queryFn?: QueryFn){

        this.ordersCollection = queryFn
            ? this.firestore.collection<Order>('orders', queryFn)
            : this.firestore.collection<Order>('orders');

        this.orders = this.ordersCollection.snapshotChanges().pipe(
            map(actions => actions.map( a =>{
                // Explicitly create an instance so we can ensure it fits the class
                    const data = new Order(a.payload.doc.data());
                    data.id = a.payload.doc.id;
                    return data;
                }
            ))
        );

        return this.orders;
    }

    updateOrder(order: Order){
        return this.firestore.doc("orders/"+order.id).update({...order});
    }

    deleteOrder(orderId: string){
        return this.firestore.doc("orders/" + orderId).delete();
    }

    // --------------------------------------------------------------------------
}
