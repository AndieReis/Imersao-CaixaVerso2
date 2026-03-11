import { Component } from '@angular/core';
//1º passo, importar a fonte de dados
import { dadosFilmes, nomesColunas } from '../../fonteDados/dadosCompFor';

@Component({
  selector: 'app-dir-for',
  imports: [],
  templateUrl: './dir-for.component.html',
  styleUrl: './dir-for.component.css'
})
export class DirForComponent {
tituloComp: string = "Implementação da diretiva estrutural *ngFor e @for"

//2º passo, definir uma nova prop que receberá nomeColunas para vincular na view
nomeandoColunas = nomesColunas
//nova prop que receberá dadosFilmes para vincular na view
listaDeFilmes = dadosFilmes


}
