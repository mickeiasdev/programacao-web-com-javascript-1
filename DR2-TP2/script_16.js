// [Fiz sozinho, meu grupo não se manifestou] - Crie uma aplicação que solicite ao usuário
// um ano com 4 dígitos e informe se aquele ano é bissexto ou não.

let ano = prompt("Informe o ano:");
if (ano) {
  ano = Number(ano);
  if (Number.isInteger(ano)) {
    let calculo = ano % 4;
    if (calculo === 0) {
      alert("O ano e Bissexto.");
    } else {
      alert("O ano nao e Bissexto.");
    }
  } else {
    alert("Informe um numero valido para o ano!");
  }
} else {
  alert("Voce clicou em cancelar. Encerrando...");
}
