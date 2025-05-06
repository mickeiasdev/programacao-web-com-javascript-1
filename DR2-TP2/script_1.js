// Crie um programa que solicite dois números maiores que zero
// e exiba a divisão de um pelo outro e o resto da divisão de um
// pelo outro em uma única mensagem

let num1 = prompt("Digite um numero maior que Zero:");
if (num1) {
  num1 = Number(num1.replace(",", "."));
  if (!isNaN(num1) && num1 > 0) {
    let num2 = prompt("Digite outro numero maior que Zero:");
    if (num2) {
      num2 = Number(num2.replace(",", "."));
      if (!isNaN(num2) && num2 > 0) {
        let div = num1 / num2;
        let resto = num1 % num2;
        alert(`Divisão: ${div.toFixed(2)}\n\nResto: ${resto.toFixed(2)}`);
      } else {
        alert(
          "O Programa espera um numero maior que Zero como entrada. Encerrando..."
        );
      }
    } else {
      alert("Voce clicou em cancelar. Encerrando...");
    }
  } else {
    alert(
      "O Programa espera um numero maior que Zero como entrada. Encerrando..."
    );
  }
} else {
  alert("Voce clicou em cancelar. Encerrando...");
}
