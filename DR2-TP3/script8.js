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

let ip = prompt("Informe os três primeiros digitos do seu IP:");

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

let ipValidado = validacaoNumeroInteiro(ip);

if (ipValidado) {
  alert(octeto(ipValidado));
}
