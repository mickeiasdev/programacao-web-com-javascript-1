// Crie um programa que calcule a área de um quadrado, sendo que o comprimento do
// lado é informado pelo usuário. A área do quadrado é calculada elevando-se o
// lado ao quadrado. Use Math.pow para aplicar a potenciação.

let lado = prompt("Infome o comprimento do lado:");
if (lado) {
  lado = Number(lado.replace(",", "."));
  if (!isNaN(lado) && lado > 0 && lado) {
    let area = Math.pow(lado, 2);
    alert(`Area: ${area.toFixed(2)}`);
  } else {
    alert("O programa espera um valor maior que Zero. Encerrando...");
  }
} else {
  alert("Voce clicou em cancelar. Encerrando...");
}
