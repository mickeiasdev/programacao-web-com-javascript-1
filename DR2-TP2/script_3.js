// Crie um programa que solicite um número maior que zero
// e calcule o seu quadrado, seu cubo e sua raiz quadrada,
// exibindo o resultado

// Entrada
let num = prompt("Digite um numero maior que Zero:");
if (num) {
  num = Number(num.replace(",", "."));
  // VALIDACAO 01: se o valor e um numero e maior que zero
  if (!isNaN(num) && num > 0) {
    // Processamento
    let quadrado = Math.pow(num, 2);
    let cubo = Math.pow(num, 3);
    let raiz = Math.sqrt(num); // o mesmo que numero elevado a 0,5
    // Saida
    alert(`
      Cubo: ${cubo.toFixed(2)}
      Raiz: ${raiz.toFixed(2)}
      Quadrado: ${quadrado.toFixed(2)}
  `);
  } else {
    alert("Esse programa espera um numero maior que Zero. Encerrando...");
  }
} else {
  alert("Voce clicou em cancelar. Encerrando...");
}
