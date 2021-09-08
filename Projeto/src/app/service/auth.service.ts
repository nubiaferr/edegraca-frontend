import { environment } from './../../environments/environment.prod';
import { UsuarioLogin } from './../model/UsuarioLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  logar(usuarioLogin: UsuarioLogin):Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>(
      'https://edegracanubia.herokuapp.com/usuario/logar', usuarioLogin
    )
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(
      'https://edegracanubia.herokuapp.com/usuario/cadastrar', usuario
    )
  }

  logado(){
    let ok = false

    if (environment.token != ''){
      ok = true
    }

    return ok
  }

  deslogado(){
    let ok = false

    if (environment.token == ''){
      ok = true
    }

    return ok
  }
  

}
