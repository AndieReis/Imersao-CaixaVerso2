import { Component } from '@angular/core';

@Component({
  selector: 'app-e-binding',
  imports: [],
  templateUrl: 'e-binding.component.html',
  styleUrl: 'e-binding.component.css'
})
export class EBindingComponent {
//definir um título para o componente
tituloComp: string = "Implementação Event Binding"

//definir um método que será chamado à execução quando um evento for disparado a partir da view
exibirAlerta(): void {
  console.log('Evento disparado...')

  alert('Um evento - a partir da view - foi disparado.')
}
}
