var carta1 = {
  nome: "Bulbasauro",
  imagem: "http://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_00.jpg",
  atributos: {
    ataque:  7,
    defesa:  8,
    magia:  6
  }
};

var carta2 = {
  nome: "Darth Vader",
  imagem: "https://t.ctcdn.com.br/9ujX8CZfRB6fyBgS-Ax3JYSZMg4=/1000x563/smart/i571972.jpeg",
  atributos: {
    ataque:  9,
    defesa:  8,
    magia:  2
  }
};

var carta3 = {
  nome: "Shiryu de dragão",
  imagem: "https://i.pinimg.com/originals/88/1b/cd/881bcde3c93388edd17f8807d6cad3c7.png",
  atributos: {
    ataque:  5,
    defesa:  9,
    magia:  10
  }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador()
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    divResultado.innerHTML = "<p class='resultado-final'>Venceu!</p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
    divResultado.innerHTML = "<p class='resultado-final'>Venceu!</p>";
  } else {
    divResultado.innerHTML = "<p class='resultado-final'>Venceu!</p>";
  }
  
  document.getElementById('btnJogar').disabled = true
  exibirCartaMaquina()
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHtml = "<div id='opcoes' class='carta-status'>";
  
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
  divCartaJogador.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHtml = "<div id='opcoes' class='carta-status'>";
  
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
  divCartaMaquina.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>";
}