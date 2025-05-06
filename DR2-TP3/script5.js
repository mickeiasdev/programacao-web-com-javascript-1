let grausC = prompt("Digite a temperatura em Graus Celsius:");
if (grausC) {
  grausC = Number(grausC.replace(",", "."));
  if (!isNaN(grausC)) {
    grausF = (grausC * 9) / 5 + 32;
    alert(`
  Graus Celsius: ${grausC.toFixed(1)}
  Graus Fahrenheit: ${grausF.toFixed(1)}
  `);
  } else {
    alert("O programa espera um numero valido");
  }
} else {
  alert("Voce clicou em cancelar. Encerrando...");
}
