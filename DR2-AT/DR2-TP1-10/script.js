// Os endereços IP versão 4 são divididos em cinco classes: A, B, C, D e E.
// Os endereços no intervalo de 0 a 127 são classe A, de 128 a 191 são classe B,
// de 192 a 223 são classe C, de 224 a 239 são classe D e a partir de 240 são classe E.
// Crie um programa que leia o primeiro octeto, no formato de um número inteiro,
// de um endereço IP e informe a sua classe. Use prompt e alert.

////////////////////////////////////////////////////////////////////////////////////////////////

const ip = prompt("Informe os três primeiros digitos do seu IP:");
let ipValidado = validacaoNumeroInteiro(ip);
if (ipValidado) {
  alert(octeto(ipValidado));
}

////////////////////////////////////////////////////////////////////////////////////////////////

function validacaoNumeroInteiro(num) {
  if (!validacaoCancelar(num)) {
    return;
  }
  num = Number(num);
  if (!Number.isInteger(num)) {
    alert("Voce deve inserir um numero inteiro.");
    return null;
  }
  return num;
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

function octeto(num) {
  if (num < 0) {
    return "Insira um valor maior ou igual a 0";
  }
  if (num >= 0 && num <= 127) {
    return "A";
  }
  if (num >= 128 && num <= 191) {
    return "B";
  }
  if (num >= 192 && num <= 223) {
    return "C";
  }
  if (num >= 224 && num <= 239) {
    return "D";
  }
  if (num > 239) {
    return "Informe um numero entre 0 e 239!";
  }
}
