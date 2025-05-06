// solicita 4 valores X A B C
// X e um numero inteiro
// A B C qualquer valor real
// mostrar os valores lidos
// se X = 1, escreva os três valores A, Be C em ordem crescente.
// se x=2, escreva os três valores A, B e C em ordem decrescente.
// se x=3, escreva os três valores A, B e C de forma que o maior fique entre os outros dois.
// Caso contrário, exiba uma mensagem indicando que
// o valor de x não corresponde a nenhuma das condições acima.

function selecionarValores(x, a, b, c) {
  switch (x) {
    case 1:
      // Ordem crescente
      const crescente = [a, b, c].sort((x, y) => y - x);
      return `Ordem crescente:\n\n${crescente[0]}\n${crescente[1]}\n${crescente[2]}`;

    case 2:
      // Ordem decrescente
      const decrescente = [a, b, c].sort((x, y) => x - y);
      return `Ordem decrescente:\n\n${decrescente[0]}\n${decrescente[1]}\n${decrescente[2]}`;

    case 3:
      // Maior valor ao meio
      const valores = [a, b, c];
      valores.sort((x, y) => y - x); // Ordena os valores em ordem crescente
      return `Maior valor ao meio:\n\n${valores[1]}\n${valores[0]}\n${valores[2]}`;

    default:
      return "Você não informou um valor válido. Encerrando...";
  }
}

let x,
  a,
  b,
  c = null;

let entradaA = prompt("Digite o primeir valor");
a = validacaoNumero(entradaA);
if (a) {
  let entradaB = prompt("Digite o segundo valor:");
  b = validacaoNumero(entradaB);
  if (b) {
    let entradaC = prompt("Digite o terceiro:");
    c = validacaoNumero(entradaC);
    if (c) {
      let entradaX = prompt(
        `Como deseja exibir os valores:\n\n1). Ordem crescente\n2). Ordem decrescente\n3). Meior valor ao meio`
      );
      x = validacaoNumero(entradaX);
    }
  }
  alert(selecionarValores(x, a, b, c));
}
