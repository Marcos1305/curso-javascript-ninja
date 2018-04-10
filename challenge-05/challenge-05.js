/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var newarray = ['marcos' , 'vinicius', 13, 05, 'Masculino'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function printArray(param){
  return param;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(printArray(newarray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myFunction(param1, param2){
    return param1[param2];
};

console.log(myFunction(newarray, 3));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayall = ['marcos', 13, true, null, undefined,]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

 printArray(arrayall);


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(namebook){
  var livro  = namebook;
  var objbook = {
      'A revolução dos Bichos': {
      quantidadePaginas : 152,
      autor: 'Orwell, George',
      editora: 'Companhia Das letras'
    },
    'Admirável Mundo Novo': {
      quantidadePaginas : 314,
      autor: 'Huxley, Aldous',
      editora: 'Biblioteca Azul'
    },
    'Senhor Das Moscas': {
      quantidadePaginas: 200,
      autor: 'Golding, William',
      editora: 'Alfaguara, Objetiva'
    }
  };

  if (namebook === undefined){
    return objbook;
  }

  return objbook[namebook];

};



/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Senhor das Moscas tem ' +book('Senhor Das Moscas').quantidadePaginas+ ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O auto do livro A revolução dos Bichos é ' + book('A revolução dos Bichos').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Admirável Mundo Novo foi publicado pela editora ' + book('Admirável Mundo Novo').editora + '.');
