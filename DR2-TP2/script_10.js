// Crie um programa que calcule a área, perímetro e o diâmetro de um círculo
// tendo o comprimento do raio informado pelo usuário. Use Math.PI.

let raio = prompt("Informe o raio do circulo:");
if (raio) {
  raio = Number(raio.replace(",", "."));

  if (!isNaN(raio) && raio > 0) {
    let area = Math.PI * Math.pow(raio, 2); //A=π×r2
    let perimetro = 2 * Math.PI * raio; //P=2×π×r
    let diametro = raio * 2; //D=2×r

    alert(`
        Area: ${area.toFixed(2)}
        Perimetro: ${perimetro.toFixed(2)}
        Diametro: ${diametro.toFixed(2)}
    `);
  } else {
    alert("O programa espera um valor maior que Zero. Encerrando...");
  }
} else {
  alert("Voce clicou em cancelar. Encerrando...");
}
