/* Exemplo 1 */
console.log("Boas-vindas");

/* Exemplo 2 */
let nome = "JP";
console.log("Olá " + nome);

/* Exemplo 3 */
let nome2 = "JP";
alert("Olá " + nome2);

/* Exemplo 4 */
let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(`Você disse que sua linguagem favorita é ${linguagem}!`);

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

/* Exemplo 7 */
let idade = parseInt(prompt("Insira sua idade:"));
if (idade >= 18) {
  console.log("Você é maior de idade!");
} else {
  console.log("Você é menor de idade!");
}

/* Exemplo 8 */
let numero = parseInt(prompt("Insira um valor:"));
if (numero > 0) {
  console.log("O número é positivo!");
} else if (numero < 0) {
  console.log("O número é negativo!");
} else {
  console.log("O número é zero!");
}

/* Exemplo 9 */
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

/* Exemplo 10 */
let nota = parseFloat(prompt("Insira sua nota:"));
if (nota >= 7) {
  console.log("Você foi aprovado!");
} else {
  console.log("Você foi reprovado!");
}

/* Exemplo 11 */
console.log(Math.random());

/* Exemplo 12 */
console.log(Math.floor(Math.random() * 10) + 1);

/* Exemplo 13 */
console.log(Math.floor(Math.random() * 1000) + 1);
