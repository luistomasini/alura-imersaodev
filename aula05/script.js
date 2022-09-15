function adicionarFilme() {
  let filmeFavorito = document.querySelector("#filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    console.error("Endereço de filme inválido.");
  }
  document.querySelector("#filme").value = "";
}

function listarFilmesNaTela(filme) {
  console.log(filme);
  let elementolistaFilmes = document.querySelector("#listaFilmes");
  let elementoFilmeFavorito = `<img src=` + filme + `>`;
  elementolistaFilmes.innerHTML += elementoFilmeFavorito;
}