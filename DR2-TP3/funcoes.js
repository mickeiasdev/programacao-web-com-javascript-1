function trocarVirgulaPorPonto(num) {
  return num.replace(",", ".");
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

function validacaoNaoNumero(num) {
  if (!validacaoCancelar(num)) {
    return;
  }
  if (!Number(num)) {
    alert("Voce deve um numero valido");
    return null;
  }
  return num;
}

////////////////////////////////////////////////////////////////////////////////////////////////

function validacaoNumero(num) {
  if (!validacaoCancelar(num)) {
    return;
  }
  num = Number(num);
  if (isNaN(num)) {
    alert("Voce deve inserir um numero valido");
    return null;
  }
  return num;
}

////////////////////////////////////////////////////////////////////////////////////////////////

function validacaoNumeroInteiro(num) {
  if (!validacaoCancelar(num)) {
    return null;
  }
  num = Number(num);
  if (!Number.isInteger(num)) {
    alert("Voce deve inserir um numero inteiro.");
    return null;
  }
  return num;
}

////////////////////////////////////////////////////////////////////////////////////////////////

function validacaoNumeroPositivo(num) {
  if (!validacaoCancelar(num)) {
    return;
  }
  if (isNaN(num)) {
    alert("Voce deve um numero valido");
    return null;
  }
  if (num <= 0) {
    alert("O numero deve ser maior que zero!");
    return null;
  }
  return num;
}

//////////////////////////////////////////////////////////////////////////////////////////////////

function calcularQuantidadeCaixa(quantidadeDoceValida, tamanhoCaixa) {
  if (quantidadeDoceValida < tamanhoCaixa) {
    return `Para ${quantidadeDoceValida} Doces voce vai precisar de 1 Caixa.`;
  }
  let quantidadeCaixa = Math.floor(quantidadeDoceValida / tamanhoCaixa);
  if (quantidadeDoceValida % tamanhoCaixa !== 0) {
    return `Para ${quantidadeDoceValida} Doces voce vai precisar de ${quantidadeCaixa} Caixas completas e 1 Caixa adicional.`;
  }
  return `Para ${quantidadeDoceValida} Doces voce vai precisar de ${quantidadeCaixa} Caixas completas.`;
}
