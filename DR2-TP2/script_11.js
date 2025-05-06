// Crie um programa que calcule o novo valor de um salário a partir de um valor
// percentual de reajuste. O valor atual do salário e o valor percentual do
// reajuste devem ser informados pelo usuário.

// Ex: salário = 5432.10 (R$5.432,10) e o percentual = 7.3 (7,3%).

let salarioAntigo = prompt("Infome o seu salario atual:");
if (salarioAntigo) {
  salarioAntigo = Number(salarioAntigo.replace(",", "."));

  if (!isNaN(salarioAntigo) && salarioAntigo > 0) {
    let percentual = prompt("Informe o percentual do ajuste:");
    if (percentual) {
      percentual = percentual.replace("%", "");
      percentual = Number(percentual.replace(",", "."));
      if (!isNaN(percentual) && percentual > 0) {
        let salarioNovo = salarioAntigo + salarioAntigo * (percentual / 100);
        alert(`
        Salario Antigo: ${salarioAntigo.toFixed(2)}R$
        Salario Atualizado: ${salarioNovo.toFixed(2)}R$
        Percentual de reajuste: ${percentual.toFixed(2)}%
        `);
      } else {
        alert("Informe um valor valido!");
      }
    } else {
      alert("Voce clicou em cancelar. Encerrando...");
    }
  } else {
    alert("Informe um valor valido!");
  }
} else {
  alert("Voce clicou em cancelar. Encerrando...");
}
