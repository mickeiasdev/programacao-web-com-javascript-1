let quantidadeDoce = prompt("Informe a quantidade de doces:");
let quantidadeDoceValida = validacaoNumeroInteiro(quantidadeDoce);
if (quantidadeDoceValida) {
  let tamanhoCaixa = prompt(
    "Qual o tamanho da caixa voce deseja empacotar seus doces.\n1. Grande\n2. Media\n3. Pequena"
  );
  if (validacaoCancelar(tamanhoCaixa)) {
    tamanhoCaixa = tamanhoCaixa.toUpperCase();
    let quantidadeCaixa = 0;
    let caixaAdicional = 0;
    switch (tamanhoCaixa) {
      case "1":
      case "GRANDE":
        alert(calcularQuantidadeCaixa(quantidadeDoceValida, 100));
        break;
      case "2":
      case "MEDIA":
        alert(calcularQuantidadeCaixa(quantidadeDoceValida, 50));
        break;
      case "3":
      case "PEQUENA":
        alert(calcularQuantidadeCaixa(quantidadeDoceValida, 20));
        break;
      default:
        alert("Error");
        break;
    }
  }
}
