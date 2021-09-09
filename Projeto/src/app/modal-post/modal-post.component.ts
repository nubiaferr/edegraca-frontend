import { Usuario } from './../model/Usuario';
import { environment } from './../../environments/environment.prod';

import { PostsService } from './../service/posts.service';
import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { TemaService } from '../service/tema.service';
import { Tema } from '../model/Tema';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.css']
})
export class ModalPostComponent implements OnInit {
  postagem: Postagem = new Postagem()
  tema: Tema = new Tema()
  user: Usuario = new Usuario()
  listaTema: Tema[]
  idTema: number
  idUser = environment.id
  listaPosts: Postagem[]


  constructor(
    private postService: PostsService,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    this.findAllTema()
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
    this.postagem.theme = this.tema

    this.user.id = this.idUser
    this.postagem.user = this.user

    this.postService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.getAllPosts()
      alert('Postado')
    })
  }

  getAllPosts(){
    this.postService.getAllPosts().subscribe((resp: Postagem[]) => {
      this.listaPosts = resp
    })
  }

}
