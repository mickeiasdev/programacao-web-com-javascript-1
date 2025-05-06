let dist = Number(prompt("Distancia em metros: "));
let temp = Number(prompt("Tempo em segundos:"));

let vm = dist / temp;

// .toFixed(2) é utilizado para restringir a 2 casas decimais após a vírgula
alert(vm.toFixed(2) + "m/s");
