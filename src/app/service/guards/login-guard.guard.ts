import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../Usuario/Usuario.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {
  constructor(private _usuarioService: UsuarioService,
              private router: Router
    ) {  }

  canActivate() {
      if (this._usuarioService.estaLogueado()) {
        console.log("Login Correcto");
        return true;
      } else {
        console.log("No se encuentra el usuario");
        this.router.navigate(['/login']);
        return false;
      }
  }
}
