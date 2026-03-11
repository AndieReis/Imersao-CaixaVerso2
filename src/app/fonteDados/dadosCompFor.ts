//Esse arquivo será nossa fonte de dados

//1º passo, importar os models para funcionar corretamente
import { Filme } from "../models/filme";
import { Colunas } from "../models/colunas";

//2º passo, construção da fonte de dados que será um conjunto de objetos gerados a partir do model Filme
export const dadosFilmes: Filme[] = [
  //3º passo, gerar objetos a partir da instância da classe Filme
  //É preciso "preencher" o conjunto de registros com os dados necessários para exibi-los no componente
  new Filme('Um Estranho no Ninho', 'Milos Formam', 'Jack Nichiolson', 1976),
  new Filme('Forest Gump - o contador de historias', 'Robert Zemeckis', 'Tom Hanks e outros', 1994),
  new Filme('Laranja Mecanica', 'Stanley Kubrik', 'Macolm Mcdowel e outros', 1971),
  new Filme('A Lista Schindler', 'Steven Spielberg', 'Liam Neeson e outros', 1993),
  new Filme('O poderoso Chefão', 'Francis Ford Copolla', 'Marlon Brando e outros', 1972)
]

//criar o conjunto de dados que dará nome as colunas da table que irá exibi-los
export const nomesColunas: Colunas[] = [
  new Colunas('Título do Filme', 'Direção', 'Elenco', 'Ano de Lançamento')
]
