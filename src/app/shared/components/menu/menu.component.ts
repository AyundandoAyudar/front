import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/config.service';

enum Rol {
  'Admin',
  'Pharmacist',
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  checkRoles = false;
  rol = Rol.Admin;
  menu = [
    {
      sectionLabel: 'Pacientes',
      matIconName: 'emoji_people',
      openSection: true,
      roles: [Rol.Admin, Rol.Pharmacist],
      sectionPages: [
        {
          pageName: 'Nuevo',
          matIconName: 'add_circle_outline',
          path: '/home/new-patient',
        },
        {
          pageName: 'Buscar',
          matIconName: 'search',
          path: '/home/find-patient',
        },
      ],
    },
    {
      sectionLabel: 'Medicamentos',
      matIconName: 'local_pharmacy',
      openSection: true,
      roles: [Rol.Admin, Rol.Pharmacist],
      sectionPages: [
        {
          pageName: 'Nuevo',
          matIconName: 'add_circle_outline',
          path: '/home/new-medicine',
        },
        {
          pageName: 'Buscar',
          matIconName: 'search',
          path: '/home/find-medicine',
        },
      ],
    },
    {
      sectionLabel: 'Mensajeros',
      matIconName: 'sports_motorsports',
      openSection: true,
      roles: [Rol.Admin, Rol.Pharmacist],
      sectionPages: [
        {
          pageName: 'Nuevo',
          matIconName: 'add_circle_outline',
          path: '/home/new-courier',
        },
        {
          pageName: 'Buscar',
          matIconName: 'search',
          path: '/home/find-courier',
        },
      ],
    },
    {
      sectionLabel: 'Envios',
      matIconName: 'email',
      openSection: true,
      roles: [Rol.Admin, Rol.Pharmacist],
      sectionPages: [
        {
          pageName: 'Agendamiento',
          matIconName: 'schedule',
          path: '/home/scheduling',
        },
        {
          pageName: 'Facturacion',
          matIconName: 'receipt',
          path: '/home/stubs-list',
        },
        {
          pageName: 'Estado Envios',
          matIconName: 'library_add_check',
          path: '/home/status-change',
        },
      ],
    },
    {
      sectionLabel: 'Usuarios',
      matIconName: 'people_alt',
      openSection: true,
      roles: [Rol.Admin],
      sectionPages: [
        {
          pageName: 'Nuevo',
          matIconName: 'add_circle_outline',
          path: '/home/new-user',
        },
        {
          pageName: 'Buscar',
          matIconName: 'search',
          path: '/home/find-user',
        },
      ],
    },
  ];
  public innerWidth: any;
  public maxWidth = 700;

  constructor(private router: Router, private configService: ConfigService) {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  isMenuOpen() {
    return this.configService.isMenuOpen();
  }

  navegate(path: string) {
    this.router.navigate([path]);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
}
