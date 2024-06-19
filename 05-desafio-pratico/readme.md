# Desafio de Prática de Lógica de Programação

## Objetivo

Praticar a programação com exercícios que testam habilidades em loops (while) e contadores.

## Atividades

1. Mensagem de Boas-Vindas: Exibir uma mensagem de boas-vindas no console.
   ```javascript
   /* Exemplo 1 */
   console.log("Boas-vindas");
   ```
2. Olá, [Seu Nome]!: Exibir a mensagem "Olá, [seu nome]!" no console do navegador e alerta.
   ```javascript
   /* Exemplo 2 */
   let nome = "JP";
   console.log("Olá " + nome);

   /* Exemplo 3 */
   let nome2 = "JP";
   alert("Olá " + nome2);
   ```
3. Prompt e Alerta: Armazenar a resposta da pergunta "Qual a linguagem de programação que você mais gosta?" em uma variável e mostrar no console do navegador.
   ```javascript
   /* Exemplo 4 */
   let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
   console.log(`Você disse que sua linguagem favorita é ${linguagem}!`);
   ```
4. Soma e Subtração: Realizar a soma e subtração de dois valores numéricos e mostrar o resultado no console.
   ```javascript
   /* Exemplo 5 */
   let valor1 = 5;
   let valor2 = 3;
   let resultado1 = valor1 + valor2;
   console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado1}.`);

   /* Exemplo 6 */
   let valor3 = 10;
   let valor4 = 5;
   let resultado2 = valor3 - valor4;
   console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado2}.`);
   ```
5. Verificar Idade: Verificar se a pessoa é maior ou menor de idade com base na idade inserida.
   ```javascript
   /* Exemplo 7 */
   let idade = parseInt(prompt("Insira sua idade:"));
   if (idade >= 18) {
     console.log("Você é maior de idade!");
   } else {
     console.log("Você é menor de idade!");
   }
   ```
6. Verificar Tipo de Número: Verificar se um número é positivo, negativo ou zero.
   ```javascript
   /* Exemplo 8 */
   let numero = parseInt(prompt("Insira um valor:"));
   if (numero > 0) {
     console.log("O número é positivo!");
   } else if (numero < 0) {
     console.log("O número é negativo!");
   } else {
     console.log("O número é zero!");
   }
   ```
7. Loop While: Imprimir os números de 1 a 10 no console utilizando um loop while.
   ```javascript
   /* Exemplo 9 */
   let i = 1;
   while (i <= 10) {
     console.log(i);
     i++;
   }
   ```
8. Nota e Aprovado/Reprovado: Verificar se uma nota é maior ou igual a 7 e exibir "Aprovado" ou "Reprovado".
   ```javascript
   /* Exemplo 10 */
   let nota = parseFloat(prompt("Insira sua nota:"));
   if (nota >= 7) {
     console.log("Você foi aprovado!");
   } else {
     console.log("Você foi reprovado!");
   }
   ```
9. Número Aleatório: Gerar um número aleatório e exibir esse número no console.
   ```javascript
   /* Exemplo 11 */
   console.log(Math.random());
   ```
10. Número Inteiro entre 1 e 10: Gerar um número inteiro entre 1 e 10 e exibir esse número no console.
    ```javascript
    /* Exemplo 12 */
    console.log(Math.floor(Math.random() * 10) + 1);
    ```
11. Número Inteiro entre 1 e 1000: Gerar um número inteiro entre 1 e 1000 e exibir esse número no console.
    ```javascript
    /* Exemplo 13 */
    console.log(Math.floor(Math.random() * 1000) + 1);
    ```
