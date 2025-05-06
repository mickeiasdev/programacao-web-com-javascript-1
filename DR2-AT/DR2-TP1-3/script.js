// Use o prompt para obter um número.
// Em seguida use outro prompt para obter uma operação aritmética.
// Em seguida use outro prompt para obter um outro número.
// Exiba o resultado em um alert.

///////////////////////////////////////////////////////////////////////////////////////////////////

let num1 = prompt("Digite o primeiro numero:");
if (validacaoDoNumero(num1)) {
  let operacao = prompt(
    "Digite o numero da operacao:\n\n1.) Soma\n2.) Subtracao\n3.) Multiplicacao\n4.) Divisao"
  );
  if (validacaoDoNumero(operacao)) {
    if (validacaoDaOperacao(operacao)) {
      let num2 = prompt("Digite o segundo numero:");
      if (validacaoDoNumero(num2)) {
        let nomeOperacao = "";
        let resultado = 0;
        num1 = Number(num1);
        num2 = Number(num2);
        switch (operacao) {
          case "1":
            resultado = num1 + num2;
            nomeOperacao = "Soma";
            alert(
              `A ${nomeOperacao} entre ${num1} e ${num2} é igual á: ${resultado}`
            );
            break;
          case "2":
            resultado = num1 - num2;
            nomeOperacao = "Subtração";
            alert(
              `A ${nomeOperacao} entre ${num1} e ${num2} é igual á: ${resultado}`
            );
            break;
          case "3":
            resultado = num1 * num2;
            nomeOperacao = "Multiplicação";
            alert(
              `A ${nomeOperacao} entre ${num1} e ${num2} é igual á: ${resultado}`
            );
            break;
          case "4":
            resultado = num1 / num2;
            nomeOperacao = "Divisão";
            alert(
              `A ${nomeOperacao} entre ${num1} e ${num2} é igual á: ${resultado}`
            );
            break;
          default:
            alert("ERROR");
        }
      }
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////

function validacaoDoNumero(num) {
  num = validacaoEntrada(num);
  num - Number(num);
  if (isNaN(num)) {
    alert("Você deve inserir um número válido. Encerrando...");
    return;
  }
  return num;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function validacaoEntrada(num) {
  if (num === null) {
    alert("Voce clicou em Cancelar. Encerrando...");
    return;
  }
  if (num.trim() === "") {
    alert("Entrada vazia. Encerrando o programa...");
    return;
  }
  return num;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function validacaoDaOperacao(num) {
  if (num) {
    num = Number(num);
    return num;
  }
  if (num >= 1 && num <= 4) {
    alert("Insira uma operacao valida entre 1 e 4...");
    return;
  }
  return num;
}
