import { AlertsService } from './../service/alerts.service';
import { environment } from './../../environments/environment.prod';
import { AuthService } from './../service/auth.service';
import { UsuarioLogin } from './../model/UsuarioLogin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {
  usuarioLogin: UsuarioLogin = new UsuarioLogin

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertsService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }
  }

  logar(){
    this.authService.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.email = this.usuarioLogin.email
      environment.empresa = this.usuarioLogin.empresa
      environment.id = this.usuarioLogin.id
      environment.senha = this.usuarioLogin.senha

      this.router.navigate(['/tema'])
    }, erro => {
      if (erro.status == 500){
        this.alert.alertDanger("Senha e/ou e-mail estão incorretos.")
      }
    })
  }

}
