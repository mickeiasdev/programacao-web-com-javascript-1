// Crie um programa que receba na entrada o valor de três notas de um aluno
// com valor entre 0 e 10 e informe a média entre elas.

// Entrada 1
let nota1 = prompt("Digite a primeira nota:");
if (nota1) {
  nota1 = Number(nota1.replace(",", "."));
  if (!isNaN(nota1) && nota1 >= 0 && nota1 <= 10) {
    let nota2 = prompt("Digite a segunda nota:");
    if (nota2) {
      nota2 = Number(nota2.replace(",", "."));
      if (!isNaN(nota2) && nota2 >= 0 && nota2 <= 10) {
        let nota3 = prompt("Digite a terceira nota:");
        if (nota3) {
          nota3 = Number(nota3.replace(",", "."));
          if (!isNaN(nota3) && nota3 >= 0 && nota3 <= 10) {
            let media = (nota1 + nota2 + nota3) / 3;
            alert(`
      Nota 01: ${nota1.toFixed(2)}
      Nota 02: ${nota2.toFixed(2)}
      Nota 03: ${nota3.toFixed(2)}

      Com base em suas notas, sua media e de: ${media}
      `);
          } else {
            alert(
              "A nota deve estar entre 0 e 10. O programa sera encerrado..."
            );
          }
        } else {
          alert("Voce clicou em cancelar. Encerrando...");
        }
      } else {
        alert("A nota deve estar entre 0 e 10. O programa sera encerrado...");
      }
    } else {
      alert("Voce clicou em cancelar. Encerrando...");
    }
  } else {
    alert("A nota deve estar entre 0 e 10. O programa sera encerrado...");
  }
} else {
  alert("Voce clicou em cancelar. Encerrando...");
}
