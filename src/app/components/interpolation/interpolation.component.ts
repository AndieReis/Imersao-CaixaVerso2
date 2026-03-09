import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
//definir um título para o componente
tituloComp: string = "Implementação Interpolation Binding"

x: number = 4;
paises: Array<string> = ['Brasil', 'Argentina', 'Paraguai', 'Uruguai', 'Moçambique'];
queDiaEhHoje: Date = new Date();
buleana: boolean = false;

// definir um método/função para cumprir uma tarefa
exibirFrase(): string{
  // definir a expressão de retorno do método
  return 'Esta é uma frase retornada de um método/função'
 }
}
