var cartas = [
  {
    nome: "Bulbassauro",
    imagem:
      "https://i.pinimg.com/736x/d2/2a/f2/d22af2ff9781dd2aab2d0ddba509ffab--cards-html.jpg",
    atributos: {
      força: 10.0,
      ataque: 7.0,
      defesa: 2.0,
      agilidade: 50
    }
  },
  {
    nome: "Charmander",
    imagem:
      "https://i.pinimg.com/originals/2a/cb/9c/2acb9cde44841656aa7f4242651bbb0f.png",
    atributos: {
      força: 25.0,
      ataque: 5.0,
      defesa: 7.0,
      agilidade: 35
    }
  }
];

var cartaMaquina;
var cartaJogador;

// Sorteio de cartas com while para nunca repetir as cartas do jogador e da máquina
function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 2);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 2);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 2);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibeCartaJogador();
  exibirOpcoes();
}

function exibirOpcoes() {
  let opcoes = document.getElementById("opcoes");
  let opcoesTexto = "";

  for (let atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }

  opcoes.style.visibility = "visible";
  opcoes.innerHTML = opcoesTexto;
}

// Função para pegar a imagem respectiva do objeto/carta selecionada //
function exibeCartaJogador() {
  // Seleciona o elemento onde será exibido à carta
  var elementoCarta = document.getElementById("player-card");

  // Monta a carta com as suas características
  formaCarta = "";
  formaCarta += "<h3>" + cartaJogador.nome + "</h3>";
  formaCarta +=
    "<img src='" + cartaJogador.imagem + "' class='player-card-image'><br>";

  elementoCarta.style.color = "white";

  elementoCarta.innerHTML = formaCarta; // Exibe a carta do Jogador na tela (HTML)
}

// Função para pegar a imagem da carta escolhida automaticamente pela máquina //
function exibeCartaMaquina() {
  // Seleciona o elemento onde será exibido à carta
  var elementoCarta = document.getElementById("maquina-card");

  // Monta a carta com as suas características
  formaCarta = "";
  formaCarta += "<h3>" + cartaMaquina.nome + "</h3>";
  formaCarta +=
    "<img src='" +
    cartaMaquina.imagem +
    "' class='player-card-adversario-image'><br>";

  elementoCarta.style.color = "white";

  elementoCarta.innerHTML = formaCarta; // Exibe a carta do Jogador na tela (HTML)
}

function obterAtributoSelecionado() {
  let radioAtributos = document.getElementsByName("atributo");

  for (let i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  let atributoSelecionado = obterAtributoSelecionado();
  let elementoResultado = document.getElementById("resultado");
  let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você Venceu!";
    exibeCartaMaquina();
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML =
      "Você Perdeu! A carta da máquina é mais forte!";
    exibeCartaMaquina();
  } else {
    elementoResultado.innerHTML = "Empatou!";
    exibeCartaMaquina();
  }
}