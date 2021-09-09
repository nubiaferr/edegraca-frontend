import { Tema } from './Tema';
import { Usuario } from './Usuario';


export class Postagem{
  public id: number
  public title: string
  public text: string
  public date: Date
  public user: Usuario
  public theme: Tema
}
