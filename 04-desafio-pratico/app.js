/* Exemplo 1 - Contador 1 ao 10 */
let contador1 = 1

while (contador1 <= 10) {
  console.log(contador1)
  contador1++
}

/* Exemplo 2 - Contator 10 ao 0 */
let contador2 = 10

while (contador2 >= 0){
  console.log(contador2)
  contador2--
}

/* Exemplo 3 - Contagem regressiva */
let contagemRegressiva = parseInt(prompt("Digite um valor de ínicio:"))

while (contagemRegressiva >= 0) {
  console.log(contagemRegressiva)
  alert(`Contagem regressiva: ${contagemRegressiva}`)
  contagemRegressiva--
}

/* Exemplo 4 - Contagem progressiva */
let contagemProgressiva = parseInt(prompt("Digite um valor de final:"))
let contador4 = 0
while (contador4 <= contagemProgressiva) {
  console.log(contador4)
  alert(`Contagem progressiva: ${contador4}`)
  contador4++
}