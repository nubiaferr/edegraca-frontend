import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LogarComponent } from './logar/logar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { Menu2Component } from './menu2/menu2.component';
import { ModalPostComponent } from './modal-post/modal-post.component';
import { FormsModule } from '@angular/forms';
import { MeusPostsComponent } from './meus-posts/meus-posts.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';
import { SobreComponent } from './sobre/sobre.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TemaComponent } from './tema/tema.component';
import { NovoTemaComponent } from './novo-tema/novo-tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostEditComponent } from './edit/post-edit/post-edit.component';
import { PostDeleteComponent } from './delete/post-delete/post-delete.component';
import { InicioComponent } from './inicio/inicio.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LogarComponent,
    CadastrarComponent,
    Menu2Component,
    ModalPostComponent,
    MeusPostsComponent,
    ConfiguracaoComponent,
    SobreComponent,
    TemaComponent,
    NovoTemaComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    PostEditComponent,
    PostDeleteComponent,
    InicioComponent,
    UserEditComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
