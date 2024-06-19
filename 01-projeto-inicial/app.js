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
