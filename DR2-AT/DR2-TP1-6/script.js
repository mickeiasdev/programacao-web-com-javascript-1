// Peça ao usuário para adivinhar o número usando prompt.
// Gere um número aleatório entre 1 e 100.
// Exiba mensagens como "Muito alto", "Muito baixo", ou "Correto!"
// com alert.

let numero = parseInt(Math.random() * 100 + 1);
let chute;
do {
  chute = Number(prompt("Chute um numero inteiro entre 1 e 100"));
  if (chute <= 100 && chute >= 1) {
    if (!chute || isNaN(chute)) {
      alert("Informe um numero valido.");
    } else {
      if (chute > numero) {
        alert("Chutou muito alto.");
      }
      if (chute < numero) {
        alert("Chutou muito baixo");
      }
    }
  } else {
    alert("Seu numero esta fora dos limites!");
  }
} while (chute !== numero);
alert("Voce acertou!");
