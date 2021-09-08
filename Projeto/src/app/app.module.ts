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
import { InicioComponent } from './inicio/inicio.component';
import { MeusPostsComponent } from './meus-posts/meus-posts.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';
import { SobreComponent } from './sobre/sobre.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TemaComponent } from './tema/tema.component';
import { NovoTemaComponent } from './novo-tema/novo-tema.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LogarComponent,
    CadastrarComponent,
    Menu2Component,
    ModalPostComponent,
    InicioComponent,
    MeusPostsComponent,
    ConfiguracaoComponent,
    SobreComponent,
    TemaComponent,
    NovoTemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
