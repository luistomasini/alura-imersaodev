var listaFilmes = ["Get Back", "A Chegada", "Quase Famosos"];

listaFilmes.push("Senhor dos Anéis: A Sociedade do Anel");
listaFilmes.push("Senhor dos Anéis: Duas Torres");
listaFilmes.push("Senhor dos Anéis: O Retorno do Rei");

console.log(listaFilmes.length);

for (let i = 0; i < listaFilmes.length; i++) {
  document.write("<p><strong>" + i + "</strong></p>");
  document.write("<p><strong>" + listaFilmes[i] + "</strong></p>");
}