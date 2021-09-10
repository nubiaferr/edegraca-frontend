import { Postagem } from './../model/Postagem';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  // token = {
  //   headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') || '')
  // }

  getAllPosts() : Observable<Postagem[]> {
    return this.http.get<Postagem[]>('https://ehdegraca.herokuapp.com/postagens', this.token)
  }

  postPostagem(post: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://ehdegraca.herokuapp.com/postagens', post, this.token)
  }

  putPostagem(post: Postagem):Observable<Postagem>{
    return this.http.put<Postagem>('https://ehdegraca.herokuapp.com/postagens', post, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://ehdegraca.herokuapp.com/postagens/${id}`, this.token)
  }

  getByIdPost(id:number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://ehdegraca.herokuapp.com/postagens/${id}`, this.token)
  }

  getByTituloPost(titulo: string): Observable<Postagem []>{
    return this.http.get<Postagem[]>(`https://ehdegraca.herokuapp.com/postagens/titulo/${titulo}`, this.token)
  }
}
