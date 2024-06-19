# Jogo do Número Secreto em JavaScript

Olá! Eu sou um aluno da formação e estou aqui para compartilhar o que aprendi sobre programação em JavaScript. Nesta aula, criamos um jogo do número secreto utilizando as estruturas de controle While, If e Else.

## Objetivo

O objetivo do jogo é descobrir o número secreto gerado aleatoriamente entre as dificuldades Fácil (1 ao 10), Normal (1 ao 100) e Díficil (1 ao 1000).

```javascript
let tentativas = 1;
let chute;
let numeroSecreto;
let dificuldade = 0;

alert("Boas vindas ao jogo do número secreto");

while (dificuldade == 0) {
  let ndificuldade = prompt(
    "Selecione a dificuldade (Fácil, Normal ou Díficil):"
  );

  switch (ndificuldade) {
    case "Fácil":
      dificuldade = 10;
      numeroSecreto = parseInt(Math.random() * dificuldade + 1);
      alert(`Dificuldade selecionada: ${ndificuldade}`);
      break;
    case "Normal":
      dificuldade = 100;
      numeroSecreto = parseInt(Math.random() * dificuldade + 1);
      alert(`Dificuldade selecionada: ${ndificuldade}`);
      break;
    case "Díficil":
      dificuldade = 1000;
      numeroSecreto = parseInt(Math.random() * dificuldade + 1);
      alert(`Dificuldade selecionada: ${ndificuldade}`);
      break;
    default:
      alert(`Dificuldade selecionada não encontrada, escolha novamente.`);
      break;
  }
}

while (chute != numeroSecreto) {
  let chute = prompt(`Escolha um número entre 1 e ${dificuldade}`);
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

Aqui vamos analisar o que cada parte do código faz:

1. Declarando variáveis: As variáveis tentativas, chute, numeroSecreto e dificuldade são declaradas com valores iniciais.
2. Mostra mensagem de boas-vindas: Uma mensagem é mostrada ao jogador para boas-vindas ao jogo.
3. Selecione a dificuldade: O jogador é perguntado a escolha da dificuldade do jogo (Fácil, Normal ou Díficil). Essa escolha é armazenada na variável ndificuldade.
4. Configura o número secreto: Com base na escolha da dificuldade, o número secreto é configurado com um valor aleatório entre 1 e a dificuldade escolhida.
5. Jogo principal: O jogador tem que chutar o número secreto. Se o chute for igual ao número secreto, o jogo acaba.
6. Loop de chute: Enquanto o chute não for igual ao número secreto, o jogador é perguntado a escolha do próximo chute.
7. Verifica se o chute está correto: Se o chute for maior que o número secreto, uma mensagem é mostrada indicando que o número secreto é menor. Se o chute for menor que o número secreto, uma mensagem é mostrada indicando que o número secreto é maior.
8. Contagem de tentativas: A variável tentativas é incrementada a cada chute feito pelo jogador.
9. Mensagem de fim do jogo: Quando o jogador acerta o número secreto, uma mensagem é mostrada com o resultado (o número secreto e o número de tentativas necessárias).


## Conclusão

Nesta aula, aprendemos a utilizar estruturas de controle While, If e Else em JavaScript para criar um jogo interativo. Além disso, estudamos como declarar variáveis com let e utilizar funções como prompt() e alert().
