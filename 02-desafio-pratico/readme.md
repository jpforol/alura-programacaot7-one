# Desafio de Prática de Lógica de Programação

## Objetivo

Praticar a lógica de programação, incluindo conceitos como variáveis, condicionais (if), alert e prompt.

## Atividades

1. Alerta: Mostrar um alerta com a mensagem "Boas vindas ao nosso site!".
2. Variável Nome: Declare uma variável chamada nome e atribua a ela o valor "Lua".
3. Variável Idade: Declare uma variável chamada idade e atribua a ela o valor 25.
4. Variáveis de Comércio: Defina variáveis chamadas numeroDeVendas e saldoDisponivel e atribua-lhes os valores 50 e 1000, respectivamente.
5. Alerta de Erro: Exiba um alerta com o texto "Erro! Preencha todos os campos".
6. Variável de Mensagem de Erro: Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos". Agora exiba um alerta com o valor da variável mensagemDeErro.
7. Prompt para Nome do Usuário: Use um prompt para perguntar ao usuário o nome e armazene-lo na variável nome.
8. Prompt para Idade do Usuário: Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
9. Condição de Idade: Caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

## Código Final

```javascript
alert("Boas vindas ao nosso site.");
let mensagemErro = "Error! Preencha os campos vazios.";
let nome = prompt("Digite seu nome:");
console.log(nome);
let idade = parseInt(prompt("Digite sua idade:"));
console.log(idade);
let numeroVendas = parseInt(prompt("Digite o número de vendas:"));
console.log(numeroVendas);
let saldoDisponivel = parseInt(prompt("Digite o saldo disponível:"));
console.log(saldoDisponivel);

if (nome == "" || !idade || !numeroVendas || !saldoDisponivel) {
  alert(mensagemErro);
} else {
  if (idade >= 18) {
    alert("Pode tirar habilitação!");
  }
  alert("Bem vindo(a) " + nome);
}

```
