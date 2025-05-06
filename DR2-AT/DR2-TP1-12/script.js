// Uma fábrica produz vários tipos de doces que são enviados para as lojas
// em caixas de vários tipos e tamanhos.
// Construa um programa que obtenha a quantidade de doces fabricados e informe
// quantas caixas completas vão ser necessárias e se será necessário uma caixa
// adicional para os doces que restaram.
// Distribuir os doces por caixas grandes (com 40 doces), médias (com 30 doces)
// e pequenas (com 20 doces).

const qntDoces = prompt("Quantidade de Doces:");
const cxGrande = 40;
const cxMedia = 30;
const cxPequena = 20;

let caixasGrandes = 0;
let caixasMedias = 0;
let caixasPequenas = 0;
let sobra = qntDoces;

if (validacaoNumeroInteiro(qntDoces)) {
  caixasGrandes = Math.floor(sobra / cxGrande);
  sobra = sobra % cxGrande;

  caixasMedias = Math.floor(sobra / cxMedia);
  sobra = sobra % cxMedia;

  caixasPequenas = Math.ceil(sobra / cxPequena);

  alert(
    `Caixas grandes: ${caixasGrandes}, caixas médias: ${caixasMedias}, caixas pequenas: ${caixasPequenas}`
  );
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
