import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
  QueryFn,
} from '@angular/fire/firestore';
import { Patient } from '../models/patient.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Deserializable} from "../models/deserializable.model";

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  constructor(private firestore: AngularFirestore) {
    //FIXME Delete examples once we start to use the service

    let patient = new Patient();
    patient.name = 'name';
    patient.idNumber = '123456';
    patient.birth_date = new Date();
    patient.email = 'email@email.com';
    patient.address = 'Calle Falsa 123';
    patient.phoneNumber = '=573213331112';

    /*this.createPatient(patient)
        .then(value => console.debug("Created"))
        .catch(reason => console.error("[error]"));*/

    this.getPatients((ref) => ref.where('idNumber', '==', '123456')).subscribe(
      (patients) => {
        // from another service we would use:
        // this.patients = value;
        console.debug('[DEBUG] WITH query function', patients);
      }
    );

    this.getPatients().subscribe((patients) => {
      // from another service, with patients: Observable<Patient>, we would use:
      // this.patients = value;
      console.debug('[DEBUG] WITHOUT query function', patients);
    });

    patient = new Patient();
    patient.id = '5CnR7PB5YfvigUqFzRx1'; // ID comes when we use getPatients
    patient.phoneNumber = '+178932234';

    this.updatePatient(patient)
      .then((value) => {
        console.debug('[DEBUG] Updated', value);
      })
      .catch((reason) => {
        console.debug('[DEBUG] Error updating', reason);
      });

    this.deletePatient('5CnR7PB5YfvigUqFzRx1') // A valid id
      .then((value) => {
        console.debug('[DEBUG] Deleted', value);
      })
      .catch((reason) => {
        console.debug('[DEBUG] Error deleting', reason);
      });
  }

  // ------------------------------ Patients ----------------------------------

  patientsCollection: AngularFirestoreCollection<Patient>;
  patients: Observable<Patient[]>;

  createPatient(patient: Patient): Promise<DocumentReference> {
    return this.firestore.collection('patients').add({ ...patient });
  }

  getPatients(queryFn?: QueryFn) {
    this.patientsCollection = queryFn
      ? this.firestore.collection<Patient>('patients', queryFn)
      : this.firestore.collection<Patient>('patients');

    this.patients = this.patientsCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          // Explicitly create an instance so we can ensure it fits the class
          const data = new Patient(a.payload.doc.data());
          data.id = a.payload.doc.id;
          return data;
        })
      )
    );

    return this.patients;
  }

  updatePatient(patient: Patient) {
    Deserializable.cleanNull(patient);
    return this.firestore.doc('patients/' + patient.id).update({ ...patient });
  }

  deletePatient(patientId: string) {
    let patient = new Patient({ id: patientId , deleted_at: new Date()});
    return this.updatePatient(patient);
  }

  // --------------------------------------------------------------------------

}
