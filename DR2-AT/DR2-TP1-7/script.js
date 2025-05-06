// Crie uma aplicação que obtenha uma string através de um prompt e informe:
// Se a string tem no mínimo 5 caracteres.
// Se a string tem no máximo 15 caracteres.
// Se a string contém a palavra “cpf” (em minúsculo).
// Crie funções em uma biblioteca para executar as 3 verificações solicitadas.

let entrada = prompt("Digite seu CPF:");

if (validarEntrada(entrada)) {
  if (validarMinimo(entrada, (min = 5))) {
    if (validarMaximo(entrada, (max = 15))) {
      if (validarDocumento(entrada, (texto = "cpf"))) {
        alert(`Entrada validas:\n\n${entrada}`);
      }
    }
  }
}
