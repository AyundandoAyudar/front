import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmationModalComponent } from '../components/confirmation-modal/confirmation-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private menuOpen: boolean;

  constructor(public dialog: MatDialog) {
    this.menuOpen = true;
  }

  toggleMenuOpen() {
    this.menuOpen = !this.menuOpen;
  }

  isMenuOpen() {
    return this.menuOpen;
  }

  openConfirmationModal(
    data = {
      message: 'Desea continuar?',
      primaryText: 'Continuar',
      secondaryText: 'Cancelar',
    }
  ) {
    return this.dialog.open(ConfirmationModalComponent, {
      data,
      width: '250px',
    });
  }
}
