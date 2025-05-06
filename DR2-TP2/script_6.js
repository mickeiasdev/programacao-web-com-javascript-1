// Crie um programa que receba o valor da altura e do peso
// de uma pessoa e retorne o seu IMC - Índice de Massa Corporal

let altura = prompt("Digite sua altura em metros:");
if (altura) {
  altura = Number(altura.replace(",", "."));
  if (!isNaN(altura) && altura > 0) {
    let peso = prompt("Digite seu peso em kilogramas:");
    if (peso) {
      peso = Number(peso.replace(",", "."));
      if (!isNaN(peso) && peso > 0) {
        let imc = peso / altura ** 2;
        alert(`Seu IMC e: ${imc.toFixed(2)}`);
      } else {
        alert("O programa espera seu peso em kilogramas. Encerrando...");
      }
    } else {
      alert("Voce clicou em cancelar. Encerrando...");
    }
  } else {
    alert("O programa espera sua altura em metros. Encerrando...");
  }
} else {
  alert("Voce clicou em cancelar. Encerrando...");
}
