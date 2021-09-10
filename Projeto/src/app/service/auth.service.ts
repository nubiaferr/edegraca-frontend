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

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://ehdegraca.herokuapp.com/usuarios/${id}`)
  }

  logar(usuarioLogin: UsuarioLogin):Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>(
      'https://ehdegraca.herokuapp.com/usuarios/logar', usuarioLogin
    )
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(
      'https://ehdegraca.herokuapp.com/usuarios/cadastrar', usuario
    )
  }

  adm(){
    let ok = false

    if (environment.email == 'adm@edg.com'){
      ok = true
    }

    return ok
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
