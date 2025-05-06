// Crie um sistema que solicite um ano por prompt
// e informe se o ano é bissexto ou não.

////////////////////////////////////////////////////////////////////////////////////////////////

const ano = prompt("Informe o ano:");
if (validacaoNumeroInteiro(ano)) {
  if (ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)) {
    alert("O ano e Bissexto");
  } else {
    alert("O ano nao e Bissexto");
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////

function validacaoCancelar(num) {
  if (num === null) {
    alert("Voce clicou em cancelar. Encerrando...");
    return null;
  }
  if (num === "") {
    alert("Voce inseriu um valor vazio...");
    return null;
  }
  return num;
}

////////////////////////////////////////////////////////////////////////////////////////////////

function validacaoNumeroInteiro(num) {
  validacaoCancelar(num);
  num = Number(num);
  if (!Number.isInteger(num) || num < 0) {
    alert("Voce deve inserir um numero Inteiro maior que Zero.");
    return;
  }
  return num;
}
