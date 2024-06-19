# Desafio de Prática de Lógica de Programação

## Objetivo

Praticar a programação com exercícios que testam habilidades em loops (while) e contadores.

## Atividades

1. Contador 1 ao 10: Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
2. Contador 10 ao 0: Crie um contador que comece em 10 e vá até 0 usando um loop while. Mostre cada número.
3. Programa de Contagem Regressiva: Peça um número e conte deste número até 0, usando um loop while no console do navegador.
4. Programa de Contagem Progressiva: Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
5. Prompt para Nome do Usuário: Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

```javascript
/* Exemplo 1 - Contador 1 ao 10 */
let contador1 = 1;
while (contador1 <= 10) {
  console.log(contador1);
  contador1++;
}

/* Exemplo 2 - Contator 10 ao 0 */
let contador2 = 10;
while (contador2 >= 0) {
  console.log(contador2);
  contador2--;
}

/* Exemplo 3 - Contagem regressiva */
let contagemRegressiva = parseInt(prompt("Digite um valor de ínicio:"));
while (contagemRegressiva >= 0) {
  console.log(contagemRegressiva);
  alert(`Contagem regressiva: ${contagemRegressiva}`);
  contagemRegressiva--;
}

/* Exemplo 4 - Contagem progressiva */
let contagemProgressiva = parseInt(prompt("Digite um valor de final:"));
let contador4 = 0;
while (contador4 <= contagemProgressiva) {
  console.log(contador4);
  alert(`Contagem progressiva: ${contador4}`);
  contador4++;
}

```
