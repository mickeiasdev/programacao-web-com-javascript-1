// Obtenha, usando prompt, o nome do usuário, a sua idade e a cidade onde mora.
// Gere uma mensagem personalizada no formato:
// "Olá, [nome]! Você tem [idade] anos e mora em [cidade]."

///////////////////////////////////////////////////////////////////////////////////////////////////

const nome = prompt("Digite seu nome:");
if (validacaoEntrada(nome)) {
  const idade = prompt("Digite sua idade:");
  if (validacaoNumero(idade)) {
    const cidade = prompt("Digite sua cidade:");
    if (validacaoEntrada(cidade)) {
      alert(`Olá, ${nome}! Você tem ${idade} anos e mora em ${cidade}.`);
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function validacaoEntrada(num) {
  if (num === null) {
    alert("Voce clicou em cancelar. Encerrando...");
    return;
  }
  if (num.trim() === "") {
    alert("Voce inseriu um valor vazio. Encerrando...");
    return;
  }
  if (num.trim().length < 3) {
    alert("A entrada deve conter 3 caracteres ou mais. Encerrando...");
    return;
  }
  return num;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function validacaoNumero(num) {
  if (isNaN(num) || num <= 0) {
    alert("Informe um numero valido maior que Zero. Encerrando...");
    return;
  }
  if (num === null) {
    alert("Voce clicou em cancelar. Encerrando...");
    return;
  }
  if (num.trim() === "") {
    alert("Voce inseriu um valor vazio. Encerrando...");
    return;
  }
  return num;
}
