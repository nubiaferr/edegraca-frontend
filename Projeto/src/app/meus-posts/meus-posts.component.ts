import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AlertsService } from '../service/alerts.service';
import { AuthService } from '../service/auth.service';
import { PostsService } from '../service/posts.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-meus-posts',
  templateUrl: './meus-posts.component.html',
  styleUrls: ['./meus-posts.component.css']
})
export class MeusPostsComponent implements OnInit {
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
    private alert: AlertsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') {
      this.router.navigate(['/login'])
    }

    this.getAllPosts()
    this.findAllTema()
    this.findByIdUsuario()
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe((resp: Postagem[]) => {
      this.listaPosts = resp
    })
  }

  findByIdUsuario(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: Usuario) => {
      this.user = resp
    })
  }


  findAllTema() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTema = resp
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  postar() {
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
