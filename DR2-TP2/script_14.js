// [Fiz sozinho, meu grupo não se manifestou]
// Crie um programa que solicite ao usuário os três lados de um triângulo
// e informe se o triângulo é Equilátero, Isósceles ou Escaleno
// (obs: Equilátero possui todos os lados iguais,
// Isósceles possui dois lados iguais e um diferente
// Escaleno possui todos os lados diferentes).

let lado1 = prompt(
  "Informe quantos centimetros tem o primeiro lado do triangulo:"
);
if (lado1) {
  lado1 = Number(lado1.replace(",", "."));
  if (!isNaN(lado1) && lado1 > 0) {
    let lado2 = prompt(
      "Informe quantos centimetros tem o segundo lado do triangulo:"
    );
    if (lado2) {
      lado2 = Number(lado2.replace(",", "."));
      if (!isNaN(lado2) && lado2 > 0) {
        let lado3 = prompt(
          "Informe quantos centimetros tem o terceiro lado do triangulo:"
        );
        if (lado3) {
          lado3 = Number(lado3.replace(",", "."));
          if (!isNaN(lado3) && lado3 > 0) {
            if (lado1 === lado2 && lado1 === lado3) {
              alert(`
                Voce tem um Triangulo Equilátero.
                `);
            } else if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1) {
              alert(`
                Você tem um Triangulo Isósceles.
                `);
            } else {
              alert("Voce tem um Triangulo Escaleno");
            }
          } else {
            alert("O tamanho do lado deve ser maior que Zero.");
          }
        } else {
          alert("Você clicou em cancelar. Encerrando...");
        }
      } else {
        alert("O tamanho do lado deve ser maior que Zero.");
      }
    } else {
      alert("Você clicou em cancelar. Encerrando...");
    }
  } else {
    alert("O tamanho do lado deve ser maior que Zero.");
  }
} else {
  alert("Você clicou em cancelar. Encerrando...");
}
