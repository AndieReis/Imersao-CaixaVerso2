import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//para o pleno funcionamento do two-way binding precisamos fazer uso do módulo
//de depenência FormsModule
@Component({
  selector: 'app-two-way',
  imports: [FormsModule],
  templateUrl: './two-way.component.html',
  styleUrl: './two-way.component.css'
})
export class TwoWayComponent {
//definir o titulo do componente
tituloComp: string = "Implementação two-way binding"

//estabelecer uma propriedade que será vinculada na view
algumValor: string = ''
}
