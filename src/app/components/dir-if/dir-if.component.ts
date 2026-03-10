import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dir-if',
  imports: [FormsModule, CommonModule],
  templateUrl: './dir-if.component.html',
  styleUrl: './dir-if.component.css'
})
export class DirIfComponent {
  tituloComp: string = "Implementação da diretiva estrutural *ngIf e @if"

  //definir uma propriedade que será avaliada pela diretiva *ngIf @if
  idade = 18
}
