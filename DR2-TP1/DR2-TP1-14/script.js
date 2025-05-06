alert("Vamos comecar com a formula da forca...");

let mass = Number(prompt("Informe a massa do objeto:"));
let acel = Number(prompt("Informe a aceleracao do objeto:"));

let f = mass * acel;

alert("Ok, agora vamos para a formula de potencia...");

let trab = Number(prompt("Informe o trabalho realizado:"));
let temp = Number(prompt("Informe o tempo:"));

let p = trab / temp;

alert(
  "Formula da forca: " + f.toFixed(2) + " Formula da potencia: " + p.toFixed(2)
);
