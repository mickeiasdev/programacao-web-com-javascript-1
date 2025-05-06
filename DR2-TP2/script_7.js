// Um motorista deseja abastecer seu carro com um valor em reais.
// Escreva um programa para ler o preço do litro do combustível e o valor
// que o motorista deseja abastecer. Em seguida, informe quantos litros
// foram colocados no tanque

let precoLitro = prompt("Digite o preco do Litro do Combustivel:");
if (precoLitro) {
  precoLitro = Number(precoLitro.replace(",", "."));
  if (!isNaN(precoLitro) && precoLitro > 0) {
    let valorAbastecer = prompt("Digite o valor que voce deseja abastecer:");
    if (valorAbastecer) {
      valorAbastecer = Number(valorAbastecer.replace(",", "."));
      if (!isNaN(valorAbastecer) && valorAbastecer > 0) {
        let litros = valorAbastecer / precoLitro;
        alert(
          `Voce abasteceu seu veiculo com ${litros.toFixed(
            2
          )} Litros de Combustivel.`
        );
      } else {
        alert(
          "O valor que voce deseja abastecer deve ser maior que Zero. Encerrando..."
        );
      }
    } else {
      alert("Voce clicou em cancelar. Encerrando...");
    }
  } else {
    alert("O preco do combutivel deve ser maior que Zero. Encerrando...");
  }
} else {
  alert("Voce clicou em cancelar. Encerrando...");
}
