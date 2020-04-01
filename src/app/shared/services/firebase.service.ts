import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentReference, QueryFn} from "@angular/fire/firestore";
import {User} from "../models/user.model";
import {Patient} from "../models/patient.model";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  users: User[];

  constructor(private firestore: AngularFirestore) {

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

    this.getPatient(ref => ref.where("idNumber","==","123456"))
        .then(value => {console.debug(value);} )
        .catch(reason => {console.error(reason);});
  }

  getUsers(){
    this.firestore.collection<User>('users').valueChanges().subscribe((data)=>{
      this.users = data;
      console.debug(this.users);
    });
  }

  // ------------------------------ Patients ----------------------------------
  createPatient(patient: Patient): Promise<DocumentReference>{
    return this.firestore.collection('patients').add({...patient});
  }

  getPatient(queryFn: QueryFn): Promise<Patient[]>{

    this.firestore.collection<Patient>('patients', queryFn).valueChanges().toPromise()
        .then(value => {
          console.log("ya casi, vamos!", value);
        })
        .catch(reason => {
          console.log("auch", reason)
        });

    return this.firestore.collection<Patient>('patients', queryFn).valueChanges().toPromise();
  }

}
