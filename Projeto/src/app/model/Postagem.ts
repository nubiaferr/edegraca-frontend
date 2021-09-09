import { Tema } from './Tema';
import { Usuario } from './Usuario';


export class Postagem{
  public id: number
  public descricao: string
  public midia: string
  public quemFaz: string
  public titulo: string
  public curtir: number
  public data: Date
  public usuario: Usuario
  public tema: Tema
}
