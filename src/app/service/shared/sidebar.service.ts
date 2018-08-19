import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'DashBoard', url: '/dashboard'},
        { titulo: 'DashBoard', url: '/dashboard'},
        { titulo: 'DashBoard', url: '/dashboard'}
      ]
    }
  ];

  constructor() { }
}
