import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaComponent } from './tema/tema.component';
import { SobreComponent } from './sobre/sobre.component';
import { MeusPostsComponent } from './meus-posts/meus-posts.component';
import { InicioComponent } from './inicio/inicio.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LogarComponent } from './logar/logar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';
import { NovoTemaComponent } from './novo-tema/novo-tema.component';
import { PostEditComponent } from './edit/post-edit/post-edit.component';
import { PostDeleteComponent } from './delete/post-delete/post-delete.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LogarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'meus-posts', component: MeusPostsComponent},
  {path: 'configuracao', component: ConfiguracaoComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'novo-tema', component: NovoTemaComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'post-edit/:id', component: PostEditComponent},
  {path: 'post-delete/:id', component: PostDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
