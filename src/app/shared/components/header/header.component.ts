import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SpinnerService } from '../../services/spinner.service';

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
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.spinnerService.openAlertDialog();
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    }).catch(() => {
      this.router.navigate(['/login']);
    }).finally(() => {
      this.spinnerService.close();
    });
  }
}
