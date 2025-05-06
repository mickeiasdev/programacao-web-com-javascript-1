// Desenvolva uma aplicação que solicite dia, mês e ano via prompts
// separados de uma data futura e mostre quantos dias, horas e minutos
// faltam para chegar.

////////////////////////////////////////////////////////////////////////////////////////////////

let entradaAnoo = prompt('Digite o "ano":');
if (validacaoNumero(entradaAnoo)) {
  let entradaMes = prompt('Digite o numero do "mes":');
  if (validarMes(entradaMes)) {
    let entradaDia = prompt('Digite o numero do "dia":');
    if (validarDia(entradaDia, entradaMes, entradaAnoo)) {
      const data = new Date();
      const dataPt = data.toLocaleString("pt-BR");
      alert(`Data atual: ${dataPt}`);

      const dataFutura = new Date(entradaAnoo, entradaMes - 1, entradaDia);
      const dataFuturaPt = dataFutura.toLocaleString("pt-BR");
      alert(`Data futura: ${dataFuturaPt}`);

      const tempo = dataFutura.getTime() - data.getTime();

      const calcDias = Math.floor(tempo / (1000 * 60 * 60 * 24));
      const calcHoras = Math.floor((tempo / (1000 * 60 * 60)) % 24);
      const calcMinutos = Math.floor((tempo / (1000 * 60)) % 60);

      alert(
        `Restao: ${calcDias} Dias, ${calcHoras} Horas e ${calcMinutos} Minutos.`
      );
    }
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////

function validarDia(num, mes, ano) {
  validacaoNumero(num);
  mes = Number(mes);
  let maxDia;
  if (mes === 2) {
    if (validarAnoBissexto(ano)) {
      maxDia = 29;
    } else {
      maxDia = 28;
    }
  } else if ([4, 6, 9, 11].includes(mes)) {
    maxDia = 30;
  } else {
    maxDia = 31;
  }
  if (num > maxDia) {
    alert(`O mês ${mes} tem no máximo ${maxDia} dias.`);
    return;
  }
  return num;
}

////////////////////////////////////////////////////////////////////////////////////////////////

function validacaoCancelar(num) {
  if (num === null) {
    alert("Voce clicou em cancelar. Encerrando...");
    return;
  }
  if (num === "") {
    alert("Voce inseriu um valor vazio...");
    return;
  }
  return num;
}

////////////////////////////////////////////////////////////////////////////////////////////////

function validacaoNumero(num) {
  if (!validacaoCancelar(num)) {
    return;
  }
  num = Number(num);
  if (!Number.isInteger(num) || num < 1) {
    alert("Voce deve inserir um numero inteiro maior que zero.");
    return;
  }
  return num;
}

////////////////////////////////////////////////////////////////////////////////////////////////

function validarMes(num) {
  validacaoNumero(num);
  if (num > 12) {
    alert("O numero do mes deve esta entre 1 e 12");
    return;
  }
  return num;
}

////////////////////////////////////////////////////////////////////////////////////////////////

function validarAnoBissexto(num) {
  if (num % 400 === 0 || (num % 4 === 0 && num % 100 !== 0)) {
    return true;
  }
  return false;
}
