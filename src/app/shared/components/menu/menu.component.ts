import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      matIconName: 'edit',
      roles: [Rol.Admin, Rol.Pharmacist],
      sectionPages: [
        {
          pageName: 'Crear',
          matIconName: 'edit',
          path: '/home/new-patient',
        },
        {
          pageName: 'Buscar',
          matIconName: 'edit',
          path: '/home/find-patient',
        },
      ],
    },
    {
      sectionLabel: 'Medicamentos',
      matIconName: 'edit',
      roles: [Rol.Admin, Rol.Pharmacist],
      sectionPages: [
        {
          pageName: 'Crear',
          matIconName: 'edit',
          path: '/home/new-medicine',
        },
        {
          pageName: 'Buscar',
          matIconName: 'edit',
          path: '/home/find-medicine',
        },
      ],
    },
    {
      sectionLabel: 'Mensajeros',
      matIconName: 'edit',
      roles: [Rol.Admin, Rol.Pharmacist],
      sectionPages: [
        {
          pageName: 'Crear',
          matIconName: 'edit',
          path: '/home/new-courier',
        },
        {
          pageName: 'Buscar',
          matIconName: 'edit',
          path: '/home/find-courier',
        },
      ],
    },
    {
      sectionLabel: 'Envios',
      matIconName: 'edit',
      roles: [Rol.Admin, Rol.Pharmacist],
      sectionPages: [
        {
          pageName: 'Agendamiento',
          matIconName: 'edit',
          path: '/home/scheduling',
        },
        {
          pageName: 'Facturacion',
          matIconName: 'edit',
          path: '/home/stubs-list',
        },
        {
          pageName: 'Estado',
          matIconName: 'edit',
          path: '/home/status-change',
        },
      ],
    },
    {
      sectionLabel: 'Usuarios',
      matIconName: 'edit',
      roles: [Rol.Admin],
      sectionPages: [
        {
          pageName: 'Crear',
          matIconName: 'edit',
          path: '/home/new-user',
        },
        {
          pageName: 'Buscar',
          matIconName: 'edit',
          path: '/home/find-user',
        },
      ],
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  navegate(path: string) {
    this.router.navigate([path]);
  }
}
