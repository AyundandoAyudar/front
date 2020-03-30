import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  users: User[];

  constructor(private firestore: AngularFirestore) {
    this.getUsers();
  }

  getUsers(){
    this.firestore.collection<User>('users').valueChanges().subscribe((data)=>{
      this.users = data;
      console.debug(this.users);
    });
  }
}
