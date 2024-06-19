# Desafio de Prática de Lógica de Programação

## Objetivo

Praticar a programação com exercícios que testam habilidades em variáveis, condicionais (if), prompts e template strings.

## Atividades

1. Pergunta Dia da Semana: Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
2. Verificar Número Positivo ou Negativo: Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
3. Sistema de Pontuação para Jogo: Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
4. Mensagem do Saldo da Conta: Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
5. Prompt para Nome do Usuário: Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

```javascript
alert("Boas vindas ao nosso site.");

let mensagemErro = "Error! Preencha os campos vazios.";
let nome = prompt("Digite seu nome:");
console.log(nome);
let chute = parseInt(prompt("Digite o número seu numéro da sorte (1-10):"));
console.log(chute);
let diaSemana = prompt("Qual dia de semana é hoje?");
let pontos = 0;

let numeroSorte = parseInt(Math.random() * 11);
let saldoDisponivel = 1000;

if (nome == "") {
  alert(mensagemErro);
} else {
  if (diaSemana == "Sábado" || diaSemana == "Domingo") {
    alert("Bem vindo(a) " + nome + " bom final de semana!");
  } else {
    alert("Bem vindo(a) " + nome + " boa semana!");
  }
}

if (chute < 0) {
  alert("Número negativo. Tente novamente");
} else {
  if (chute == numeroSorte) {
    saldoDisponivel = saldoDisponivel + 100;
    pontos = pontos + 10;
    alert(
      `Parabéns ${nome} você acabou de ganhar no número da sorte! Novo saldo: R$ ${saldoDisponivel} e Nova pontuação: ${pontos}`
    );
  } else {
    alert(
      `${nome} não fique triste. Tente novamente amanhã. Saldo disponível: R$ ${saldoDisponivel} e pontuação atual: ${pontos}`
    );
  }
}

```
