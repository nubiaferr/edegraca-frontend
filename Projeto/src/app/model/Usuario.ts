import { Postagem } from './Postagem';
export class Usuario{
  public id: number
  public email: string
  public nome: string
  public senha: string
  public empresa: boolean
  public postagens: Postagem[]
}
