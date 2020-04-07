import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { StorageService } from './storage.service';
import { promise } from 'protractor';

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

  subscriptionAuthState$ = this.angularFireAuth.authState.subscribe((user) => {
    if (user) {
      console.debug('Authenticated', { user });
      // Do nothing
    } else {
      console.debug('Not authenticated');
      this.storageService.clean();
    }
  });

  // Forward functions
  createUser = this.angularFireAuth.auth.createUserWithEmailAndPassword;
  resetPassword = this.angularFireAuth.auth.sendPasswordResetEmail;
  // Forward states
  get user() {
    return this.angularFireAuth.auth.currentUser;
  }
  get authState() {
    return this.angularFireAuth.authState;
  }
  get isLogged() {
    return !!this.user;
  }

  // FIXME: Delete accounts for test after implement page login
  //login email = 'a@a.co', password = '123456'
  login(email = '', password = ''): Promise<firebase.auth.UserCredential> {
    return this.angularFireAuth.auth
      .signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<void> {
    return this.angularFireAuth.auth.signOut();
  }

  reAuthenticate(currentPassword) {
    const user = this.angularFireAuth.auth.currentUser;
    const cred = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(cred);
  }

  changePassword(currentPassword, newPassword) {
    return this.reAuthenticate(currentPassword)
      .then(() => {
        const user = this.user;
        return user.updatePassword(newPassword);
      })
      .then((user) => {
        console.debug('Password updated!', { user });
        return user;
      })
      .catch((error) => {
        console.debug(error);
        return Promise.reject(error);
      });
  }
}
