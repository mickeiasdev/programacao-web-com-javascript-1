let valorSaque = prompt("Informe o valor do saque:");

valorSaqueValido = validacaoCancelar(valorSaque);

if (valorSaqueValido) {
  validacaoNumeroInteiro(valorSaqueValido);

  let nota100 = divisaoQuantidadeNotas(valorSaqueValido, 100);
  let nota50 = divisaoQuantidadeNotas(valorSaqueValido, 50);
  let nota20 = divisaoQuantidadeNotas(valorSaqueValido, 20);
  let nota10 = divisaoQuantidadeNotas(valorSaqueValido, 10);

  alert(
    `Quantidades em cada nota:\n\n${nota100} Notas de 100\n${nota50} Notas de 50\n${nota20} Notas de 20\n${nota10} Notas de 10`
  );
}

function divisaoQuantidadeNotas(valorSaqueValido, num) {
  num = Math.floor(valorSaqueValido / num);
  return num;
}
