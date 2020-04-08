import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference, QueryFn} from "@angular/fire/firestore";
import {Courier} from "../models/courier.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CourierService {

  constructor(private firestore: AngularFirestore) { }

  // ------------------------------ Couriers ----------------------------------

  couriersCollection: AngularFirestoreCollection<Courier>;
  couriers: Observable<Courier[]>;

  createCourier(courier: Courier): Promise<DocumentReference>{
    return this.firestore.collection('couriers').add({...courier});
  }

  getCouriers(queryFn?: QueryFn){

    this.couriersCollection = queryFn
        ? this.firestore.collection<Courier>('couriers', queryFn)
        : this.firestore.collection<Courier>('couriers');

    this.couriers = this.couriersCollection.snapshotChanges().pipe(
        map(actions => actions.map( a =>{
              let data = a.payload.doc.data() as Courier;
              data.id = a.payload.doc.id;
              return data;
            }
        ))
    );

    return this.couriers;
  }

  updateCourier(courier: Courier){
    return this.firestore.doc("couriers/"+courier.id).update({...courier});
  }

  deleteCourier(courierId: string){
    return this.firestore.doc("couriers/" + courierId).delete();
  }

  // --------------------------------------------------------------------------

}
