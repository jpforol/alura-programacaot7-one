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
  alert("Bem vindo(a) "+ nome);
}
