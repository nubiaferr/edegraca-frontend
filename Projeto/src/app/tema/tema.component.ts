import { AlertsService } from './../service/alerts.service';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Tema } from './../model/Tema';
import { TemaService } from './../service/tema.service';
import { PostsService } from './../service/posts.service';
import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {
  postagem: Postagem = new Postagem()
  tema: Tema = new Tema()
  user: Usuario = new Usuario()
  listaTema: Tema[]
  idTema: number
  idUser = environment.id
  listaPosts: Postagem[]
  key = 'date'
  reverse = true

  constructor(
    private postService: PostsService,
    private temaService: TemaService,
    private router: Router,
    private alert: AlertsService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }

    this.getAllPosts()
    this.findAllTema()
  }

  getAllPosts(){
  this.postService.getAllPosts().subscribe((resp: Postagem[]) => {
    this.listaPosts = resp
  })
}


findAllTema(){
  this.temaService.getAllTema().subscribe((resp: Tema[]) => {
    this.listaTema = resp
  })
}

findByIdTema(){
  this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) =>{
    this.tema = resp
  })
}

postar(){
  this.tema.id = this.idTema
  this.postagem.tema = this.tema

  this.user.id = this.idUser
  this.postagem.usuario = this.user

  this.postService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
    this.postagem = resp
    this.getAllPosts()

    this.alert.alertSuccess("Post feito com sucesso!")
    this.router.navigate(['/tema'])

  })
}

}
