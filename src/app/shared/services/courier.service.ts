import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference, QueryFn} from "@angular/fire/firestore";
import {Courier} from "../models/courier.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Deserializable} from "../models/deserializable.model";

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
            // Explicitly create an instance so we can ensure it fits the class
              const data = new Courier(a.payload.doc.data());
              data.id = a.payload.doc.id;
              return data;
            }
        ))
    );

    return this.couriers;
  }

  updateCourier(courier: Courier){
    Deserializable.cleanNull(courier);
    return this.firestore.doc("couriers/"+courier.id).update({...courier});
  }

  deleteCourier(courierId: string){
    let courier = new Courier({id: courierId, deleted_at: new Date()})
    return this.updateCourier(courier);
  }

  // --------------------------------------------------------------------------

}
