import { Tema } from 'src/app/model/Tema';
import { Postagem } from './../model/Postagem';
import { TemaService } from 'src/app/service/tema.service';
import { Usuario } from './../model/Usuario';
import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {
  id = environment.id
  usuario: Usuario = new Usuario()
  postagem: Postagem = new Postagem()
  tituloPost: string
  tituloTema: string
  listaPost: Postagem[]
  tema: Tema = new Tema()
  listaTema: Tema []

  constructor(
    private router: Router,
    private postService: PostsService,
    private temaService: TemaService
  ) { }

  ngOnInit() {
  }

  findByTituloGeral(){
    this.router.navigate(['/tema'])

    if(this.tituloPost == '' && this.tituloTema == ''){
      this.getAllPosts()
    }

    this.postService.getByTituloPost(this.tituloPost).subscribe((resp: Postagem[]) => {
      this.listaPost = resp
    })

    this.temaService.getByTituloTema(this.tituloPost).subscribe((resp: Tema[]) => {
      this.listaTema = resp
    })
  }

  getAllPosts(){
    this.postService.getAllPosts().subscribe((resp: Postagem[]) => {
      this.listaPost = resp
    })
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
