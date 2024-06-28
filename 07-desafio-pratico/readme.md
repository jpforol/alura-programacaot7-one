# Desafio de Prática com Funções JavaScript

## Objetivo

O objetivo deste desafio é praticar a criação e uso de funções em JavaScript. As funções são blocos de código que executam uma tarefa específica e podem ser reutilizadas ao longo do programa, o que torna o código mais organizado e modular. Vamos explorar como definir e chamar funções, passando parâmetros e retornando valores.

## Atividades

Vamos realizar uma série de atividades para consolidar o entendimento sobre funções. Cada atividade é um pequeno desafio que ajudará a reforçar a prática com funções em JavaScript.

1. Função "Olá, Mundo!"
2. Função "Olá, [Nome]!"
3. Função para Dobrar um Número
4. Função para Calcular a Média
5. Função para Encontrar o Maior Número
6. Função para Multiplicar um Número por Ele Mesmo

## Código Completo

```javascript
// Função "Olá, mundo!"
function saudacaoMundo() {
    console.log("Olá, mundo!");
}
saudacaoMundo();

// Função "Olá, [nome]!"
function saudacaoNome(nome) {
    console.log("Olá, " + nome + "!");
}
saudacaoNome("Maria");

// Função para dobrar um número
function dobrarNumero(numero) {
    return numero * 2;
}
console.log(dobrarNumero(5)); // 10

// Função para calcular a média de três números
function calcularMedia(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
console.log(calcularMedia(4, 8, 12)); // 8

// Função para encontrar o maior número entre dois
function encontrarMaiorNumero(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(encontrarMaiorNumero(7, 10)); // 10

// Função para multiplicar um número por ele mesmo
function multiplicarPorSiMesmo(numero) {
    return numero * numero;
}
console.log(multiplicarPorSiMesmo(6)); // 36

```
