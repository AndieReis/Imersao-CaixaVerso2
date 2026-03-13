import { dadosForm } from './../../models/dadosForm';
//Definicao de Model Driven Form: controlar todas as ações que ocorrem no formulário a partir da camada lógica do componente

import { Component, OnInit } from '@angular/core';
//OnInit priorizar qualquer conteúdo que possa surgir na tela, assim que o componente for carregado
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
//import { dadosForm } from '../../models/dadosForm';

//FormGroup: é a classe que auxilia no controle geral do formulário
//FormControl: é a classe que auxilia no controle individual de cada input do formulário
//Validators: é a classe que auxilia na criação/aplicação de validadores dos dados recebidos pelo formulário
//ReactiveFormsModule: recurso/modulo que auxilia com que o formulário responda a qualquer alteração dos inputs

@Component({
  selector: 'app-formularios',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css',
})
export class FormulariosComponent implements OnInit {
  tituloComp: string = 'Implementando o ngForm';

  //Definir 3 propriedades para controle do formulário
  dadosForm!: FormGroup; //propriedade que exercerá o controle geral do formulário
  propNome!: string;
  propEmail!: string;

  //Definição do Angular Hook OnInit
  ngOnInit(): void {
    //Instanciamos a classe FormGroup para "assumir o papel" de controlador geral do formulário
    this.dadosForm = new FormGroup({
      //definir os objetos de controle individual de cada "pedaço" do form

      //1ª estrutura de controle - input nome
      nome: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ),

      //2ª estrutura de controle - input email
      email: new FormControl('', [Validators.required, Validators.email]),

      //3ª estrutura de controle - input senha
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  //Definir novo método para exibir os dados na tela
  exibirDados(umDado: any): void{
    this.propNome = umDado.nome
    this.propEmail = umDado.email
  }

  dadosRecebidos(){}

}

// definir o método/função que receberá os dados obtidos do formulário
// dadosRecebidos(dadosChegando: dadosForm): void {
//   //definir uma let para manipular os dados recebidos do formulário
//   let exibicao: string = 'O nome informado é: ' + dadosChegando.nome + '\n';

//   exibicao += 'e o email inserido é: ' + dadosChegando.email;
//   alert(exibicao)
