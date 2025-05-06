// Crie um sistema onde o usuário digita um nome de usuário e senha utilizando prompt.
// Verifique se as credenciais estão corretas (defina valores fixos para nome de usuário
// e senha em JavaScript, como user: admin, password: 1234).
// Mostre um alert com a mensagem correta, conforme se o login foi bem sucedido ou não.

///////////////////////////////////////////////////////////////////////////////////////////////////

let user = "admin";
let senha = "1234";
let entradaUser = prompt("Digite seu usuario:");
if (validacaoEntrada(entradaUser)) {
  let entradaSenha = prompt("Digite sua senha:");
  if (validacaoEntrada(entradaSenha)) {
    if (user !== entradaUser || senha !== entradaSenha) {
      alert("Suas credenciais estao incorretas.");
    } else {
      alert(`Olá ${user}, sua entrada foi bem sucedida.`);
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
  return num;
}
