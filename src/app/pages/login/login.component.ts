import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase';
import { AuthService } from 'src/app/shared/services/auth.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userName: string;
  public password: string;

  public errorlogin: boolean = false;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private spinnerService: SpinnerService
  ) {
  }

  ngOnInit() {
  }

  clearError() {
    this.errorlogin = false;
  }

  logIn() {
    this.spinnerService.openAlertDialog();
    this.authService.login(this.userName, this.password)
      .then((dataUser) => {
        this.storageService.setValue('user',
          {
            userId: dataUser.user.uid,
            name: dataUser.user.email,
            role: 'admin' //change when we have user collection
          });
        this.router.navigate(['/home']);
        this.spinnerService.close();
      }).catch(err => {
        this.errorlogin = true;
        this.spinnerService.close();
      });
  }

}
