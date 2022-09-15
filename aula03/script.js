var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  let chute = parseInt(document.getElementById("valor").value);
  let elementoResultado = document.getElementById("resultado");
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute < 0 || chute > 10) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "Errou! O número secreto é menor que o número digitado.";
  } else {
    elementoResultado.innerHTML =
      "Errou! O número secreto é maior que o número digitado.";
  }
}