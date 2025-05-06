// Crie um programa que solicite o valor da conta de restaurante
// e a quantidade de pessoas, calcule a gorjeta de 10% e exiba o
// resultado total e o valor por pessoa

let conta = prompt("Digite o valor total da conta:");
if (conta) {
  conta = Number(conta.replace(",", "."));

  if (!isNaN(conta) && conta > 0) {
    let pessoa = prompt("Digite a quantidade de pessoas a pagar:");
    if (pessoa) {
      pessoa = Number(pessoa.replace(",", "."));
      if (!isNaN(pessoa) && pessoa > 0) {
        let gorjeta = conta * (10 / 100);
        let contaTotal = conta + gorjeta;
        let contaPessoa = contaTotal / pessoa;
        alert(`
        Valor total da conta: R$ ${contaTotal.toFixed(2)}
        Valor da gorjeta: R$ ${gorjeta.toFixed(2)}
        Valor da conta por pessoa: R$ ${contaPessoa.toFixed(2)}
    `);
      } else {
        alert(
          "A quantidade de pessoas deve ser maior que zero. O programa sera encerrado."
        );
      }
    } else {
      alert("Voce clicou em cancelar. Encerrando...");
    }
  } else {
    alert(
      "O valor da conta deve ser maior que zero. O programa sera encerrado."
    );
  }
} else {
  alert("Voce clicou em cancelar. Encerrando...");
}
