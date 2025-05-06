let val = prompt("Digite o valor da compra:");
val = validacaoNumero(val);

if (validacaoNumero(val)) {
  let cod = prompt(
    `Digite seu codigo:\n\nA). Gestante\nB). Aposentado\nC). Pensionista`
  );
  cod = validacaoCancelar(cod);
  if (validacaoCancelar(cod)) {
    calcularDesconto(val, cod);
  } else {
    alert("erro");
  }
}

function calcularDesconto(val, cod) {
  let desconto = 0;
  if (cod === "A" || cod === "GESTANTE" || cod === "1") {
    desconto = val >= 80 ? 20 : 15;
  } else if (cod === "B" || cod === "APOSENTADO" || cod === "2") {
    desconto = val >= 80 ? 15 : 10;
  } else if (cod === "C" || cod === "PENSIONISTA" || cod === "3") {
    desconto = val >= 80 ? 10 : 5;
  }
  let valFinal = val - (val * desconto) / 100;
  return alert(
    `O valor final da compra, com desconto de ${desconto}%, é R$ ${valFinal.toFixed(
      2
    )}`
  );
}
