import { Usuario } from './../model/Usuario';
import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {
  id = environment.id
  usuario: Usuario = new Usuario()

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  sair(){
    this.router.navigate(['/login'])
    environment.token = ''
    environment.email = ''
    environment.empresa = false
    environment.id = 0
    environment.nome = ''
    environment.senha = ''
  }

}
