import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';
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

  getAllPosts() : Observable<Postagem[]> {
    return this.http.get<Postagem[]>('https://edegraca.herokuapp.com/postagens', this.token)
  }

  postPostagem(post: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://edegraca.herokuapp.com/postagens', post, this.token)
  }
}
