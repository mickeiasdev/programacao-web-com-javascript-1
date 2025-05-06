function validarMinimo(num, min) {
  if (num.length < min) {
    alert("Informe no minimo 5 digitos do CPF");
    return;
  }
  return num;
}
///////////////////////////////////////////////////////////////////////////////////////////////////
function validarMaximo(num, max) {
  if (num.substring(3, 4)) {
    max++;
  }
  if (num.length > max) {
    alert("Informe no maximo 15 digitos do CPF");
    return;
  }
  return num;
}
///////////////////////////////////////////////////////////////////////////////////////////////////

function validarDocumento(num, texto) {
  if (!num.toLowerCase().startsWith(texto.toLowerCase())) {
    alert(`Você deve digitar "${texto}" antes dos números`);
    return;
  }
  return num;
}
////////////////////////////////////////////////////////////////////////////////////////////////
function validarEntrada(num) {
  if (num === null) {
    alert("Voce clicou em cancelar. Encerrando...");
    return;
  }
  if (num === "") {
    alert("Voce inseriu um valor vazio...");
    return;
  }
  return num;
}
