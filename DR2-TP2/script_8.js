// Um motorista deseja abastecer seu carro com um valor em reais
// e quer saber se é melhor usar álcool ou gasolina. Escreva um programa para ler
// o preço do litro de cada combustível e informe qual é o mais vantajoso.
// O cálculo básico para se descobrir se o álcool é vantajoso ou não em relação
// à gasolina é simples: basta dividir o preço do litro do álcool pelo da gasolina.
// Se o resultado for inferior a 0,7 - use álcool, caso contrário abasteça com gasolina

let gasolina = prompt("Digite o preco do Litro da Gasolina:");
if (gasolina) {
  gasolina = Number(gasolina.replace(",", "."));
  if (!isNaN(gasolina) && gasolina > 0) {
    let alcool = prompt("Digite o preco do Litro do Alcool:");
    if (alcool) {
      alcool = Number(alcool.replace(",", "."));
      if (!isNaN(alcool) && alcool > 0) {
        let diferenca = alcool / gasolina;
        if (diferenca < 0.7) {
          alert(`Abasteca com Alcool.`);
        } else {
          alert(`Abasteca com Gasolina.`);
        }
      } else {
        alert("O preco do combutivel deve ser maior que Zero. Encerrando...");
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
