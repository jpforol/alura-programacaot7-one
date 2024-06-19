# Jogo do Número Secreto em JavaScript

Olá! Eu sou um aluno da formação e estou aqui para compartilhar o que aprendi sobre programação em JavaScript. Nesta aula, criamos um jogo do número secreto utilizando as estruturas de controle While, If e Else.

## Objetivo

O objetivo do jogo é descobrir o número secreto gerado aleatoriamente entre 1 e 10.

```javascript
let numeroSecreto = parseInt(Math.random() * 11);
let tentativas = 1;
let chute;

alert("Boas vindas ao jogo do número secreto");

while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 10");
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert("O número secreto é menor");
        } else {
            alert("O número secreto é maior");
        }
    }
    tentativas++;
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`
);
```

### Explicação

No início, estamos declarando as variáveis numeroSecreto, tentativas e chute. O numeroSecreto é gerado aleatoriamente entre 1 e 10 utilizando a função Math.random().

Em seguida, vamos utilizar um loop While para perguntar ao usuário para escolher um número até que ele acerte o número secreto. A cada iteração do loop, estamos verificando se o chute é igual ao número secreto. Se sim, paramos o loop com o comando break.

Se não for, estamos utilizando um If-Else para verificar se o chute é maior ou menor que o número secreto e mostrando uma mensagem de feedback ao usuário.

Finalmente, estamos contabilizando as tentativas do usuário e mostrando a mensagem final com o resultado.

## Conclusão

Nesta aula, aprendemos a utilizar estruturas de controle While, If e Else em JavaScript para criar um jogo interativo. Além disso, estudamos como declarar variáveis com let e utilizar funções como prompt() e alert().
