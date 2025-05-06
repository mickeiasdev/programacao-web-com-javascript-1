function calcularData() {
  let escolhaData1 = document.getElementById("data1").value;
  let escolhaData2 = document.getElementById("data2").value;

  let data1 = new Date(escolhaData1);
  let data2 = new Date(escolhaData2);
  if (data2 > data1) {
    let tempo = data2.getTime() - data1.getTime();

    let calcDias = Math.floor(tempo / (1000 * 60 * 60 * 24));

    let alert = document.getElementById("alert");
    alert.innerHTML = `<p>${calcDias} dia(s) de diferenca!</p>`;
    return true;
  } else if (data1 > data2) {
    let alert = document.getElementById("alert");
    alert.innerHTML = `<p>A Data Final deve ser maior que a Data Inicial!</p>`;
    return false;
  } else {
    let alert = document.getElementById("alert");
    alert.innerHTML = `<p>Informe uma data valida!</p>`;
    return false;
  }
}
