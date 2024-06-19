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
