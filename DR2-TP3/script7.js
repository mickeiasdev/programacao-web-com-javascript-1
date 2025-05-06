let idade = Number(prompt("Digite sua idade:"));

if (idade >= 18 && idade <= 70) {
  alert("Obrigado a votar");
} else if ((idade >= 16 && idade < 18) || idade > 70) {
  alert("Voto eletivo");
} else if (idade < 16) {
  alert("Nao pode votar");
} else {
  alert("Digite um numero inteiro maior que zero.");
}
