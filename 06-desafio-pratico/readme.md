# Desafio de Prática com Funções JavaScript

## Objetivo

O objetivo deste desafio é praticar a criação e uso de funções em JavaScript. As funções são blocos de código que executam uma tarefa específica e podem ser reutilizadas ao longo do programa, o que torna o código mais organizado e modular. Vamos explorar como definir e chamar funções, passando parâmetros e retornando valores.

## Atividades

Vamos realizar uma série de atividades para consolidar o entendimento sobre funções. Cada atividade é um pequeno desafio que ajudará a reforçar a prática com funções em JavaScript.

1. Alterar o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio
2. Criar uma função que exiba no console a mensagem "O botão foi clicado" sempre que o botão Console for clicado
3. Criar uma função que exiba no console a mensagem "Eu amo JS" sempre que o botão Alerta for clicado
4. Criar uma função que exiba no console a mensagem "Estive em {cidade} e lembrei de você" sempre que o botão Alerta for clicado
5. Criar uma função que peça 2 números inteiros e exiba o resultado da soma em um alerta.

## Código Completo

```javascript
/* Alterar o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio */
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio!";

/* Criar uma função que exiba no console a mensagem "O botão foi clicado" sempre que o botão Console for clicado*/
function botaoConsole() {
  console.log("O botão foi clicado");
}

/* Criar uma função que exiba no console a mensagem "Eu amo JS" sempre que o botão Alerta for clicado*/
function botaoAlerta() {
  console.log("Eu amo JS");
}

/* Criar uma função que exiba no console a mensagem "Estive em {cidade} e lembrei de você" sempre que o botão Alerta for clicado*/
function botaoPrompt() {
  let cidade = prompt("Digite uma cidade:");
  console.log(`Estive em ${cidade} e lembrei de você`);
}

/* Criar uma função que peça 2 números inteiros e exiba o resultado da soma em um alerta.*/
function botaoSoma() {
  let num1 = parseInt(prompt("Digite o valor do primeiro número:"));
  let num2 = parseInt(prompt('Digite o valor do segundo número:'))
  alert(` A soma de ${num1} + ${num2} é igual: ${num1+num2}`)
}

```
