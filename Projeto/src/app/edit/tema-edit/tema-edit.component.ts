import { environment } from './../../../environments/environment.prod';
import { AlertsService } from './../../service/alerts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from './../../model/Tema';
import { Component, OnInit } from '@angular/core';
import { TemaService } from 'src/app/service/tema.service';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {
  tema: Tema = new Tema()


  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertsService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdTema(id)
  }

  findByIdTema(id: number) {
    this.temaService.getByIdTema(id).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  atualizar(){
    this.temaService.putTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      this.alert.alertSuccess("Tema atualizado com sucesso!")
      this.router.navigate(['/novo-tema'])
    })
  }

}
