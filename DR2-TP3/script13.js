let peso = prompt("Informe seu peso:");

let pesoValido = validacaoNumeroPositivo(peso);

if (pesoValido && pesoValido > 0) {
  let altura = prompt("Informe sua altura:");

  let alturaValida = validacaoNumeroPositivo(altura);
  if (alturaValida) {
    let imc = pesoValido / alturaValida ** 2;
    let switchResultado = "";
    switch (true) {
      case imc < 18.5:
        switchResultado = "Abaixo do normal";
        break;
      case imc >= 18.5 && imc <= 24.9:
        switchResultado = "Normal.";
        break;
      case imc > 24.9 && imc <= 29.9:
        switchResultado = "Sobrepeso.";
        break;
      default:
        switchResultado = "Obesidade. Sinal de alerta!";
        break;
    }
    alert(switchResultado);
  }
}
