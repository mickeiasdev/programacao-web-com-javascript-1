// Crie um programa que contenha os seguintes itens:
// Crie um comentário explicando a diferença entre let e const. Mostre exemplos de uso.
// Crie um comentário explicando porque utilizar var ou variáveis não declaradas é uma má prática.

//------------------------------------------------------------------------------------------------

// O `let` permite declarar variáveis em bloco, ou seja, a variável existe apenas
// dentro do bloco de código onde foi declarada, como em loops ou condicionais.
// Além disso, a variável pode ser reatribuída após sua declaração.

let idade = "Vinte";
idade = 21; // Reatribuição válida com let
console.log(idade); // Retornará 21

//-------------------------------------------------------------------------------------------------

// O `const` também possui escopo de bloco, mas a principal diferença é que
// uma vez que a variável é atribuída, seu valor não pode ser alterado. Portanto,
// `const` é utilizado quando você tem certeza de que o valor da variável não irá mudar.

const nome = "Mickeias";
// nome = "Pedro"; // Isso retornaria um erro, pois não podemos reatribuir um valor em const
console.log(nome); // Retornará "Mickeias"

//-------------------------------------------------------------------------------------------------

// O uso de `var` pode ser problemático, pois a variável tem escopo de função ou global,
// o que pode levar a comportamentos inesperados

//-------------------------------------------------------------------------------------------------

// Declarar uma variável sem a "palavra-chave" cria uma variável global automaticamente,
// que é uma má pratica

texto = "texto";
console.log(texto);

// A melhor prática é sempre declarar suas variáveis corretamente, usando `let` ou `const`,
// e evitar o uso de `var` ou a criação de variáveis globais acidentais.
