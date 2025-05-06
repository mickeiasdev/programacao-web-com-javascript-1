// [Fiz sozinho, meu grupo não se manifestou] - Crie um programa que peça que o usuário escolha entre Pedra,
// Papel ou Tesoura (pode ser uma entrada numérica = 1, 2 ou 3). O programa deve escolher
// uma dessas opções aleatoriamente e em seguida deve informar para o usuário qual foi a
// escolha sorteada pelo programa e se ele ganhou ou não do programa.

let escolha1 = prompt(
  "Escolha entre:\n\n1. - Pedra 🪨\n2. - Papel 📄\n2. - Tesoura ✂️"
);

if (escolha1) {
  if (escolha1 === "1" || escolha1 === "pedra") {
    escolha1 = 1;
    let escolhaAleatoria = Math.floor(Math.random() * 3) + 1;
    let mensagem;

    if (escolhaAleatoria === 2) {
      mensagem = "Voce perdeu, eu escolhi Papel!";
    } else if (escolhaAleatoria === 3) {
      mensagem = "Voce ganhou, eu escolhi Tesoura!";
    } else {
      mensagem = "Houve um empate, eu escolhi pedra!";
    }
    alert(mensagem);
  } else if (escolha1 === "2" || escolha1 === "papel") {
    escolha1 = 2;
    let escolhaAleatoria = Math.floor(Math.random() * 3) + 1;
    let mensagem;
    if (escolhaAleatoria === 1) {
      mensagem = "Voce ganhou, eu escolhi Pedra!";
    } else if (escolhaAleatoria === 3) {
      mensagem = "Voce perdeu, eu escolhi Tesoura!";
    } else {
      mensagem = "Houve um empate, eu escolhi Papel!";
    }
    alert(mensagem);
  } else if (escolha1 === "3" || escolha1 === "tesoura") {
    escolha1 = 3;
    let escolhaAleatoria = Math.floor(Math.random() * 3) + 1;
    let mensagem;
    if (escolhaAleatoria === 1) {
      mensagem = "Voce ganhou, eu escolhi Papel!";
    } else if (escolhaAleatoria === 3) {
      mensagem = "Houve um empate, eu escolhi Tesoura!";
    } else {
      mensagem = "Voce perdeu, eu escolhi Pedra!";
    }
    alert(mensagem);
  } else {
    alert("Erro");
  }
} else {
  alert("Digite um valor valido");
}
