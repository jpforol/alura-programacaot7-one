// Declaração global para acessar a lista de números sorteados
let listaSorteados = [];

function novoJogo() {
  exibirTextoNaTela("h3", `Números já sorteados: ${listaSorteados}`);

  console.log(listaSorteados);

  toggleOnButtonsDificuldade();
  toggleOffButtonsChute();
  tentativas = 1;
  limparCampo();
  document.getElementById("reiniciar").setAttribute("disabled", true);

  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha uma dificuldade.");
}

function facilButton() {
  numeroSecreto = gerarNumeroAleatorio(10);
  toggleOffButtonsDificuldade();
  toggleOnButtonsChute();
  exibirTextoNaTela("h1", "Jogo do número secreto - Fácil");
  exibirTextoNaTela("p", "Escolha um número de 1 a 10.");
}

function normalButton() {
  numeroSecreto = gerarNumeroAleatorio(100);
  toggleOffButtonsDificuldade();
  toggleOnButtonsChute();
  exibirTextoNaTela("h1", "Jogo do número secreto - Normal");
  exibirTextoNaTela("p", "Escolha um número de 1 a 100.");
}

function dificilButton() {
  numeroSecreto = gerarNumeroAleatorio(1000);
  toggleOffButtonsDificuldade();
  toggleOnButtonsChute();
  exibirTextoNaTela("h1", "Jogo do número secreto - Difícil");
  exibirTextoNaTela("p", "Escolha um número de 1 a 1000.");
}

function gerarNumeroAleatorio(dificuldade) {
  let numeroEscolhido = parseInt(Math.random() * dificuldade + 1);
  if (listaSorteados.includes(numeroEscolhido)) {
    gerarNumeroAleatorio(dificuldade);
  } else {
    listaSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function exibirTextoNaTela(tag, text) {
  let campo = document.querySelector(tag);
  campo.innerHTML = text;
  responsiveVoice.speak(text, "Brazilian Portuguese Female", { rate: 1.2 });
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function toggleOnButtonsDificuldade() {
  document.getElementById("facil").removeAttribute("disabled");
  document.getElementById("normal").removeAttribute("disabled");
  document.getElementById("dificil").removeAttribute("disabled");
}

function toggleOffButtonsDificuldade() {
  document.getElementById("facil").setAttribute("disabled", true);
  document.getElementById("normal").setAttribute("disabled", true);
  document.getElementById("dificil").setAttribute("disabled", true);
}

function toggleOnButtonsChute() {
  document.getElementById("chute").removeAttribute("disabled");
  document.getElementById("ip_chute").removeAttribute("disabled");
}

function toggleOffButtonsChute() {
  document.getElementById("chute").setAttribute("disabled", true);
  document.getElementById("ip_chute").setAttribute("disabled", true);
}

function verificarChute() {
  console.log(numeroSecreto);
  let chute = parseInt(document.querySelector("input").value);
  if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    limparCampo();
    exibirTextoNaTela(
      "p",
      `Parabéns você acertou em ${tentativas} ${palavraTentativa}.`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    tentativas++;
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", `Você chutou ${chute}. O número é menor.`);
    } else {
      exibirTextoNaTela("p", `Você chutou ${chute}. O número é maior.`);
    }
    limparCampo();
  }
}

function resetarLista() {
  listaSorteados = [];
  exibirTextoNaTela("h3", `Números já sorteados: ${listaSorteados}`);
}

/* Estado inicial */
let numeroSecreto;
let tentativas;

novoJogo();
