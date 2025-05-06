let num = prompt("Digite um numero:");

if (num) {
  num = Number(num.replace(",", "."));
  if (isNaN(num)) {
    alert("Digite um numero valido, inteiro...");
  } else if (num > 0) {
    num = Number(num.replace(",", "."));
    alert(`${num} é positivo`);
  } else {
    num = Number(num.replace(",", "."));
    alert(`${num} é negativo`);
  }
} else {
  alert("Voce clicou em cancelar. Encerrando...");
}
