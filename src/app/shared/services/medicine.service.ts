import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
  QueryFn,
} from '@angular/fire/firestore';
import { Medicine } from '../models/medicine.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  constructor(private firestore: AngularFirestore) {
    this.allMedicines$ = this.getMedicines();
  }

  // ------------------------------ Medicine ----------------------------------

  medicinesCollection: AngularFirestoreCollection<Medicine>;
  allMedicines$: Observable<Medicine[]>;
  medicines: Observable<Medicine[]>;

  createMedicine(medicine: Medicine): Promise<DocumentReference> {
    return this.firestore.collection('medicines').add({ ...medicine });
  }

  getMedicines(queryFn?: QueryFn) {
    this.medicinesCollection = queryFn
      ? this.firestore.collection<Medicine>('medicines', queryFn)
      : this.firestore.collection<Medicine>('medicines');

    this.medicines = this.medicinesCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          // Explicitly create an instance so we can ensure it fits the class
          const data = new Medicine(a.payload.doc.data());
          data.id = a.payload.doc.id;
          return data;
        })
      )
    );

    return this.medicines;
  }

  updateMedicine(medicine: Medicine) {
    return this.firestore
      .doc('medicines/' + medicine.id)
      .update({ ...medicine });
  }

  deleteMedicine(medicineId: string) {
    return this.firestore.doc('medicines/' + medicineId).delete();
  }

  // --------------------------------------------------------------------------
}
