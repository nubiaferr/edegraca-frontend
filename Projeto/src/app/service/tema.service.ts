import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../model/Tema';

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

  getAllTema(): Observable <Tema []>{
    return this.http.get<Tema[]>('https://edegraca.herokuapp.com/temas', this.token)
  }

  postTema(tema: Tema) : Observable <Tema>{
    return this.http.post<Tema>('https://edegraca.herokuapp.com/temas', tema, this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://edegraca.herokuapp.com/temas/${id}`, this.token)
  }

}
