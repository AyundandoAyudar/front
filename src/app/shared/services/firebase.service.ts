import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentReference,
  QueryFn
} from "@angular/fire/firestore";
import {User} from "../models/user.model";
import {Patient} from "../models/patient.model";
import {Observable} from "rxjs";
import actions from "@angular/fire/schematics/deploy/actions";
import {map} from "rxjs/operators";
import {Medicine} from "../models/medicine.model";
import {Courier} from "../models/courier.model";
import {Order} from "../models/order.model";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  users: User[];

  constructor(private firestore: AngularFirestore) {

    //FIXME Delete examples once we start to use the service

    let patient = new Patient();
    patient.name = "name";
    patient.idNumber = "123456";
    patient.birth_date = new Date();
    patient.email = "email@email.com"
    patient.address = "Calle Falsa 123";
    patient.phoneNumber = "=573213331112"

    /*this.createPatient(patient)
        .then(value => console.debug("Created"))
        .catch(reason => console.error("[error]"));*/

    this.getPatients( ref => ref.where("idNumber", "==", "123456"))
        .subscribe(patients => {
          // from another service we would use:
          // this.patients = value;
          console.debug("[DEBUG] WITH query function", patients);
        });

    this.getPatients()
        .subscribe(patients => {
          // from another service, with patients: Observable<Patient>, we would use:
          // this.patients = value;
          console.debug("[DEBUG] WITHOUT query function", patients);
        });


    patient.id = "vvmpDJp1aRs0pIS0sSKD"; // ID comes when we use getPatients
    patient.phoneNumber = "+573213213211"
    this.updatePatient(patient)
        .then(value => {
          console.debug("[DEBUG] Updated", value);
        })
        .catch(reason => {
          console.debug("[DEBUG] Error updating", reason);
        });

    this.deletePatient("tI4e9H6Jkr9U5AdIX0Kp") // A valid id
        .then(value => {
          console.debug("[DEBUG] Deleted", value);
        })
        .catch(reason => {
          console.debug("[DEBUG] Error deleting", reason);
        });

  }

  getUsers(){
    this.firestore.collection<User>('users').valueChanges().subscribe((data)=>{
      this.users = data;
      console.debug(this.users);
    });
  }

  // ------------------------------ Patients ----------------------------------

  patientsCollection: AngularFirestoreCollection<Patient>;
  patients: Observable<Patient[]>;

  createPatient(patient: Patient): Promise<DocumentReference>{
    return this.firestore.collection('patients').add({...patient});
  }

  getPatients(queryFn?: QueryFn){

    this.patientsCollection = queryFn
        ? this.firestore.collection<Patient>('patients', queryFn)
        : this.firestore.collection<Patient>('patients');

    this.patients = this.patientsCollection.snapshotChanges().pipe(
        map(actions => actions.map( a =>{
              let data = a.payload.doc.data() as Patient;
              data.id = a.payload.doc.id;
              return data;
            }
        ))
    );

    return this.patients;
  }

  updatePatient(patient: Patient){
    return this.firestore.doc("patients/"+patient.id).update({...patient});
  }

  deletePatient(patientId: string){
    return this.firestore.doc("patients/" + patientId).delete();
  }

  // --------------------------------------------------------------------------

  // ------------------------------ Medicine ----------------------------------

  medicinesCollection: AngularFirestoreCollection<Medicine>;
  medicines: Observable<Medicine[]>;

  createMedicine(medicine: Medicine): Promise<DocumentReference>{
    return this.firestore.collection('medicines').add({...medicine});
  }

  getMedicines(queryFn?: QueryFn){

    this.medicinesCollection = queryFn
        ? this.firestore.collection<Medicine>('medicines', queryFn)
        : this.firestore.collection<Medicine>('medicines');

    this.medicines = this.medicinesCollection.snapshotChanges().pipe(
        map(actions => actions.map( a =>{
              let data = a.payload.doc.data() as Medicine;
              data.id = a.payload.doc.id;
              return data;
            }
        ))
    );

    return this.medicines;
  }

  updateMedicine(medicine: Medicine){
    return this.firestore.doc("medicines/"+medicine.id).update({...medicine});
  }

  deleteMedicine(medicineId: string){
    return this.firestore.doc("medicines/" + medicineId).delete();
  }

  // --------------------------------------------------------------------------

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
              let data = a.payload.doc.data() as Order;
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
