let numero = Number(prompt("Numero:"));

let h = Math.floor(numero / 60);

let m = numero % 60;

alert(numero + " equilavem a " + h + " horas e " + m + " minutos.");

/*
    Peguei o numero arredondando para baixo apos dividir por 60
    Depois peguei o resto dassa divisao e coloquei em outra variavel
    e concatenei tudo em uma string
*/
