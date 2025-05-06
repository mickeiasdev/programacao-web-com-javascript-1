// Um time de e-sports tem duas opções para mascote, o RoboRat e o SuperKeyboard.
// No arquivo script.js, siga as etapas abaixo:
// Crie uma aplicação que solicite ao usuário a quantidade de votos recebida por cada mascote,
// mais a quantidade de votos inválidos.
// Informe a porcentagem de votos de cada mascote e a porcentagem de votos inválidos.
// Informe também a porcentagem de votos de cada mascote, considerando apenas os votos válidos.
// Informe qual será o novo mascote do time.

let nomeMascote1,
  nomeMascote2,
  invalidos,
  totalVotos,
  porcMascote1,
  porcMascote2,
  porcInvalidos;

function calcularVotos() {
  nomeMascote1 = prompt("Digite o nome do primeiro mascote:");
  nomeMascote1 = validacaoCancelar(nomeMascote1);
  if (nomeMascote1) {
    nomeMascote2 = prompt("Digite o nome do segundo mascote:");
    nomeMascote2 = validacaoCancelar(nomeMascote2);
    if (nomeMascote2) {
      mascote1 = prompt(`Digite a quantidade de votos do ${nomeMascote1}:`);
      mascote1 = validacaoNumeroInteiro(mascote1);
      if (mascote1) {
        mascote2 = prompt(`Digite a quantidade de votos do ${nomeMascote2}:`);
        mascote2 = validacaoNumeroInteiro(mascote2);
        if (mascote2) {
          invalidos = prompt(`Digite a quantidade de votos do Invalidos:`);
          invalidos = validacaoNumeroInteiro(invalidos);
          if (invalidos) {
            totalVotos = mascote1 + mascote2 + invalidos;
            porcMascote1 = (mascote1 / totalVotos) * 100;
            porcMascote2 = (mascote2 / totalVotos) * 100;
            porcInvalidos = (invalidos / totalVotos) * 100;
            alert(
              `Votos:\n\n${nomeMascote1}: ${parseInt(
                porcMascote1
              )}%\n${nomeMascote2}: ${parseInt(
                porcMascote2
              )}%\nInvalidos: ${parseInt(porcInvalidos)}%`
            );
          }
        }
      }
    }
  }
}

calcularVotos();
