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
