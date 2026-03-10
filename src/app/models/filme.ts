// O objetivo desse arquivo é: praticar o uso da diretiva @for para que seja possível
//utilizar um conjunto de dados- baseado em dados sobre filmes - e criar uma tabema (no componente)
//para exibi-los

//a classe abaixo (simples classe TS) - vai "atuar" como model domain (conjunto regras/formatos descritos na classe) para serem aplicados aos dados e manter sua consistência/integridade
export class Filme{
  titulo: string
  direcao: string
  elenco: string
  anoLancamento: string

  //inicializar as props apartir do construtor da classe
  constructor(
    titulo: string,
    direcao: string,
    elenco: string,
    anoLancamento: string
  ){
    //acessar as propriedades da classe e inicializá-las atribuindo os parâmetros do método construtor
    this.titulo = titulo
    this.direcao = direcao
    this.elenco = elenco
    this.anoLancamento = anoLancamento
  }
}
