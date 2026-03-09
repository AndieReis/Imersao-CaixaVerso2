import { Component } from '@angular/core';


@Component({
  selector: 'app-p-binding',
  imports: [],
  templateUrl: './p-binding.component.html',
  styleUrl: './p-binding.component.css'
})
export class PBindingComponent {
//definir o título do comp
tituloComp: string = "Implementação Property Binding"

//definir uma nova propriedade para vinculá-la na viwe
umTexto: string = "Texto da prop."
}
