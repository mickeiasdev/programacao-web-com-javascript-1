// Crie uma aplicação que obtenha o dia, mês e o ano de uma data com prompt e informe:
// O dia da semana em português.
// O mês do ano em português.

////////////////////////////////////////////////////////////////////////////////////////////////

let entradaAno = prompt('Digite o numero do "ano":');
if (validacaoNumero(entradaAno)) {
  let entradaMes = prompt('Digite o numero do "mes":');
  if (validarMes(entradaMes)) {
    let entradaDia = prompt('Digite o numero do "dia":');
    if (validarDia(entradaDia, entradaMes, entradaAno)) {
      let entradaData = new Date(entradaAno, entradaMes - 1, entradaDia);
      const capturaDia = entradaData.getDay();
      const capturaMes = entradaData.getMonth();
      let diaPortugues;
      let mesPortugues;
      switch (capturaDia) {
        case 0:
          diaPortugues = "Domingo";
          break;
        case 1:
          diaPortugues = "Segunda-Feira";
          break;
        case 2:
          diaPortugues = "Terca-Feira";
          break;
        case 3:
          diaPortugues = "Quarta-Feira";
          break;
        case 4:
          diaPortugues = "Quinta-Feira";
          break;
        case 5:
          diaPortugues = "Sexta-Feira";
          break;
        case 6:
          diaPortugues = "Sabado";
          break;
      }

      switch (capturaMes) {
        case 0:
          mesPortugues = "Janeiro";
          break;
        case 1:
          mesPortugues = "Fevereiro";
          break;
        case 2:
          mesPortugues = "Marco";
          break;
        case 3:
          mesPortugues = "Abril";
          break;
        case 4:
          mesPortugues = "Maio";
          break;
        case 5:
          mesPortugues = "Julho";
          break;
        case 6:
          mesPortugues = "Julho";
          break;
        case 7:
          mesPortugues = "Agosto";
          break;
        case 8:
          mesPortugues = "Setembro";
          break;
        case 9:
          mesPortugues = "Outubro";
          break;
        case 10:
          mesPortugues = "Novembro";
          break;
        case 11:
          mesPortugues = "Dezembro";
          break;
      }

      alert(`
      Dia da semana: ${diaPortugues}
      Mes do ano: ${mesPortugues}
      `);
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
