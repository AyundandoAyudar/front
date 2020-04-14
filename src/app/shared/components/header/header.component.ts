import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SpinnerService } from '../../services/spinner.service';
import { StorageService } from '../../services/storage.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private menuOpen: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private spinnerService: SpinnerService,
    private storageService: StorageService,
    private configService: ConfigService
  ) {}

  ngOnInit() {
    this.menuOpen = this.configService.isMenuOpen();
  }

  get session() {
    return this.storageService.allVault
      ? this.storageService.allVault.user
      : '';
  }

  logOut() {
    this.spinnerService.openAlertDialog();
    this.authService
      .logout()
      .then(() => {
        this.storageService.clean();
        this.router.navigate(['/login']);
      })
      .catch(() => {})
      .finally(() => {
        this.router.navigate(['/login']);
        this.spinnerService.close();
      });
  }

  getMenuIconName() {
    return this.menuOpen ? 'menu_open' : 'menu';
  }

  toggleMenuOpen() {
    this.menuOpen = !this.menuOpen;
    this.configService.toggleMenuOpen();
  }
}
