import { Tema } from './../model/Tema';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  
  // token = {
  //   headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') || '')
  // }

  getAllTema(): Observable <Tema []>{
    return this.http.get<Tema[]>('https://ehdegraca.herokuapp.com/tema', this.token)
  }

  postTema(tema: Tema) : Observable <Tema>{
    return this.http.post<Tema>('https://ehdegraca.herokuapp.com/tema', tema, this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://ehdegraca.herokuapp.com/tema/${id}`, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://ehdegraca.herokuapp.com/tema', tema, this.token)
  }

  deleteTema(id: number){
    return this.http.delete(`https://ehdegraca.herokuapp.com/tema/${id}`, this.token)
  }

  getByTituloTema(titulo: string): Observable<Tema []>{
    return this.http.get<Tema[]>(`https://ehdegraca.herokuapp.com/tema/titulo/${titulo}`, this.token)
  }
}
