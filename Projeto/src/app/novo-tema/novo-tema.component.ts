import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-novo-tema',
  templateUrl: './novo-tema.component.html',
  styleUrls: ['./novo-tema.component.css']
})
export class NovoTemaComponent implements OnInit {
  tema: Tema = new Tema()
  listaTema: Tema[]

  constructor(
    private temaService: TemaService,
    private router: Router
  ) { }

  ngOnInit(){
    this.findAllTema()
  }

  cadastraTema(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      alert('Tema cadastrado com sucesso')
      this.findAllTema()
      this.tema = new Tema()
    })
  }

  findAllTema(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTema = resp
    })
  }

}
