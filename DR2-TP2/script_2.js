// Crie um programa que receba o valor de um produto, o valor pago
// e calcule (a) o troco, (b) o troco arredondado para cima e (c) o troco
// arredondado para baixo. Mostre uma única mensagem com o resultado

let produto = prompt("Digite o valor do produto:");
if (produto) {
  produto = Number(produto.replace(",", "."));
  if (!isNaN(produto) && produto > 0) {
    let pagamento = prompt("Digite o valor do pagamento:");
    if (pagamento) {
      pagamento = Number(pagamento.replace(",", "."));
      if (!isNaN(pagamento) && pagamento > 0) {
        if (pagamento > produto) {
          let troco = pagamento - produto;
          console.log(troco);
          let trocoCima = Math.ceil(pagamento - produto);
          let trocoBaixo = Math.floor(pagamento - produto);
          alert(
            `Troco arredondado para cima: ${trocoCima}\n\nTroco arredondado para baixo: ${trocoBaixo}`
          );
        } else {
          alert("Voce nao tem dinheiro suficiente. O programa sera encerrado.");
        }
      } else {
        alert("Voce clicou em cancelar. Encerrando...");
      }
    } else {
      alert(
        "O valor do pagamento deve ser maior que Zero. O programa sera encerrado."
      );
    }
  } else {
    alert(
      "O valor do produto deve ser maior que Zero. O programa sera encerrado."
    );
  }
} else {
  alert("Voce clicou em cancelar. Encerrando...");
}
