import { AlertsService } from './../../service/alerts.service';
import { environment } from './../../../environments/environment.prod';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Usuario } from './../../model/Usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  confirmarSenha: string
  tipoUser: true
  idUser: number

  usuario: Usuario = new Usuario

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertsService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/home'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  confirmaSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipoUsuario(event: any){
    this.tipoUser = event.target.value
  }

  atualizar(){
    this.usuario.empresa = this.tipoUser

    if(this.usuario.senha != this.confirmarSenha){
      this.alert.alertDanger("Senhas não coincidem.")
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/inicio'])
        this.alert.alertSuccess("Usuário atualizado, faça login novamente")
        environment.token = ''
        environment.email = ''
        environment.empresa = false
        environment.id = 0
        environment.nome = ''
        environment.senha = ''

        this.router.navigate(['/login'])
      })

    }
  }

  findByIdUser(id: number) {
    this.authService.getByIdUser(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

}
