import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private menuOpen: boolean;

  constructor() {
    this.menuOpen = true;
  }

  toggleMenuOpen() {
    this.menuOpen = !this.menuOpen;
  }

  isMenuOpen() {
    return this.menuOpen;
  }
}
