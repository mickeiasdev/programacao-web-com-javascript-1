/*
    A função Math.random() retorna um número pseudo-aleatório
    entre 0 (inclusivo) e 1 (exclusivo), ou seja, pode gerar valores
    como 0, 0.5, mas nunca 1. Esse número pode ser ajustado para
    criar números em outros intervalos. A cada execução, o algoritmo
    utiliza uma semente para gerar esses números aleatórios, mas essa
    semente não pode ser escolhida ou alterada pelo usuário.
    **[ Gera numeros aleatório ]**

    A função Math.floor(x) retorna o maior número inteiro
    que é menor ou igual ao número "x".
    **[ Arredonda para o inteiro menor ]**
*/

let numeroAleatorio = Math.floor(Math.random() * 5);

console.log(numeroAleatorio);
