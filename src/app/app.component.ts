import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AyudandoAyudar';
  constructor(public angularFireAuth: AngularFireAuth) {
    this.login();
  }
  login() {
    this.angularFireAuth.auth
      .signInWithEmailAndPassword('a@a.co', '123456')
      .then(user => {
        console.log('AppComponent test login', {
          user,
          user2: this.angularFireAuth.auth.currentUser,
        });
      })
      .catch(user => {
        console.log('AppComponent test login', { user });
      });
  }
  logout() {
    this.angularFireAuth.auth.signOut();
  }
}
