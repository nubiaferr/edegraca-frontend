import { Tema } from './Tema';
import { Usuario } from './Usuario';


export class Postagem{
  public id: number
  public descricao: string
  public midia: string
  public quem_faz: string
  public titulo: string
  public like: number
  public usuario: Usuario
  public tema: Tema
}
