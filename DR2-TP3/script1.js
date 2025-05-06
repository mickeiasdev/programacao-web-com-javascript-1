// Crie um programa que calcule a área de um quadrado,
// sendo que o comprimento do lado é informado pelo usuário.
// A área do quadrado é calculada elevando-se o lado ao quadrado.
// Use Math.pow para aplicar a potenciação

let lado = prompt("Informe o lado do quadrado:");

if (lado && !isNaN(lado)) {
  lado = Number(lado.replace(",", "."));
  let area = Math.pow(lado, 2);
  alert(`Area: ${area.toFixed(2)}`);
} else {
  alert("Informe um numero valido...");
}
