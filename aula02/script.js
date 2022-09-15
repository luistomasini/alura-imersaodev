function Converter() {
  let valorElemento = document.querySelector("#valor");
  let valor = valorElemento.value;
  let valorEmDolarNumerico = parseFloat(valor);
  let valorEmReal = valorEmDolarNumerico * 5;
  let elementoValorConvertido = document.getElementById("valorConvertido");
  let valorConvertido = "O resultado em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}