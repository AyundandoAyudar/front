import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SpinnerService } from '../../services/spinner.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private spinnerService: SpinnerService,
    private storageService: StorageService,
  ) { }

  ngOnInit() {
  }

  get session() {
    return this.storageService.allVault ? this.storageService.allVault.user : '';
  }

  logOut() {
    this.spinnerService.openAlertDialog();
    this.authService.logout().then(() => {
      this.storageService.clean();
      this.router.navigate(['/login']);
    }).catch(() => {
    }).finally(() => {
      this.router.navigate(['/login']);
      this.spinnerService.close();
    });
  }
}
