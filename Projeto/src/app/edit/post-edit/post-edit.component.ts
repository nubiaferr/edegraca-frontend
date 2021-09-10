import { AlertsService } from './../../service/alerts.service';
import { TemaService } from 'src/app/service/tema.service';
import { Usuario } from './../../model/Usuario';
import { Tema } from 'src/app/model/Tema';
import { environment } from './../../../environments/environment.prod';
import { PostsService } from './../../service/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Postagem } from 'src/app/model/Postagem';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  postagem: Postagem = new Postagem()
  tema: Tema = new Tema()
  listaTema: Tema[]
  idTema: number


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostsService,
    private temaService: TemaService,
    private alert: AlertsService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdPost(id)
    this.findAllTema()
  }

  findByIdPost(id: number){
    this.postService.getByIdPost(id).subscribe((resp: Postagem) => {
      this.postagem = resp
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

  atualizar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.postService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alert.alertSuccess("Post atualizado com sucesso!")
      this.router.navigate(['/tema'])
    })
  }

}
