//importar recursos para regionalização da moeda a partir do currency pipe
//importar registerLocaleData do CommonModule
import { Component, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

//importar o recurso de localidade específico que queremos
import  localePt  from '@angular/common/locales/pt';

//refernciar/acessar o método, função registerLocalData() para registrar a região desejada
registerLocaleData(localePt, 'pt')

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  //Aqui será indicado o uso do array providers[]
  providers:[{
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  tituloComp: string = "Implementação de | Pipes"

  //definir um conjunto de props com valores diferentes
  umTextoQualquer: string = "TEXTO EM MAIÚSCULO - PODE SER ALTERADO PARA MINÚSCULO"
  valorFloat: number = 978.55
  umaData: Date = new Date()
  calendario: Array<string> = ['Jan','Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set',
    'Out', 'Nov', 'dez']
  umOutroValor:number = 0.89
}
