let comprimento = Number(prompt("Informe o comprimento:"));
let error =
  "Esse programa espera um número inteiro positivo como entrada para a altura...";

if (Number.isInteger(comprimento) && comprimento > 0) {
  let altura = Number(prompt("Informe a altura:"));
  if (Number.isInteger(altura) && altura > 0) {
    let area = altura * comprimento;
    alert(`Area: ${area.toFixed(2)}`);
  } else {
    alert(error);
  }
} else {
  alert(error);
}
