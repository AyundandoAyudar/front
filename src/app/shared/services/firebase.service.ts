import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentReference,
  QueryFn
} from "@angular/fire/firestore";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  users: User[];

  constructor(private firestore: AngularFirestore) {
  }

  getUsers(){
    this.firestore.collection<User>('users').valueChanges().subscribe((data)=>{
      this.users = data;
      console.debug(this.users);
    });
  }

}
