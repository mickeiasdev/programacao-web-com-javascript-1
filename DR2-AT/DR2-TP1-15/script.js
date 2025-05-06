function validar() {
  let erro = document.getElementById("alert");
  erro.innerHTML = ``;
  let nomeValido = validarNome();
  let idadeValida = validarIdade();
  let emailValido = validarEmail();

  return nomeValido && idadeValida && emailValido;
}

////////////////////////////////////////////////////////////////////////////////////////////////

function validarNome() {
  let entradaN = document.getElementById("nome");
  let erro = document.getElementById("alert");
  if (entradaN.value.trim().length < 3) {
    erro.innerHTML += `<p>O Nome deve conter 3 ou mais caracteres.</p></br>`;
    return false;
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////////////////////

function validarIdade() {
  let entradaI = document.getElementById("idade");
  let erro = document.getElementById("alert");
  entradaI.value = parseInt(entradaI.value);
  if (isNaN(entradaI.value) || entradaI.value <= 0) {
    entradaI.value = ``;
    erro.innerHTML += `<p>A Idade deve ser um numero positivo maior que Zero.</p></br>`;
    return false;
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////////////////////

function validarEmail() {
  let entradaE = document.getElementById("email");
  let erro = document.getElementById("alert");
  if (!entradaE.value.includes("@")) {
    erro.innerHTML += `<p>O Email deve conter "@"</p></br>`;
    return false;
  }
  return true;
}
