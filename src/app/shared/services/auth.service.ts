import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
/**
 * Service to manage the authentication,
 * the user will be saved in indexedDB by firebase
 */
export class AuthService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private storageService: StorageService
  ) {
    // FIXME: remove test after implement page login
    this.login();
  }

  subscriptionAuthState$ = this.angularFireAuth.authState.subscribe((auth) => {
    if (auth) {
      console.debug('Authenticated', { auth });
      // Do nothing
    } else {
      console.debug('Not authenticated');
      this.storageService.clean();
    }
  });

  // FIXME: Delete accounts for test after implement page login
  login(email = 'a@a.co', password = '123456') {
    this.angularFireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.debug('AppComponent test login', {
          user,
          user2: this.user,
        });
        return user;
      })
      .catch((user) => {
        console.debug('AppComponent test login', { user });
      });
  }
  logout() {
    this.angularFireAuth.auth.signOut();
  }

  get user() {
    return this.angularFireAuth.auth.currentUser;
  }
}
