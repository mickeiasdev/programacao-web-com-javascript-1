// Crie um programa que contenha os seguintes itens:
// Crie um comentário explicando a diferença entre os valores null e undefined.
// Apresente um exemplo onde o tipo undefined aparece no JS,
// e também um exemplo de uso prático do tipo null.

//------------------------------------------------------------------------------------------------

// No JavaScript, `undefined` é um valor primitivo que indica que uma variável foi declarada,
// mas ainda não foi atribuída a nenhum valor.

// Exemplo de `undefined`:
let nome;
console.log(nome); // undefined (porque 'nome' não foi atribuído ainda)

//------------------------------------------------------------------------------------------------

// Já `null` é um valor primitivo que explicitamente representa a ausência de valor ou um "valor nulo",
// ou seja, a variável foi intencionalmente definida como "sem valor".

// Exemplo de `null`:
let pessoa = null; // A variável foi explicitamente definida como "sem valor"
console.log(pessoa); // null

//------------------------------------------------------------------------------------------------

// A diferença principal é que `undefined` geralmente ocorre quando uma variável é declarada,
// mas ainda não foi atribuída, enquanto `null` é um valor atribuído explicitamente
// para indicar a ausência de valor.
