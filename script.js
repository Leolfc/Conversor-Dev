const convertButton = document.querySelector(".converterButton");
const currencyBr = document.querySelector(".currency-valueBr");
const input = document.querySelector(".input-currency");
const selectFLag = document.querySelector("#selectFlag");
const img = document.querySelector(".bandeiraEstadosUnidos");
const valorConvertido = document.querySelector(".currency-valueUs");
const nomeMoeda = document.querySelector("#nomeMoeda");

function moeda() {
  const dolarToday = 5.42;
  const euroToday = 6.3;
  const libraToday = 7.32;
  const bitcoinToday = 597943;

  if (selectFLag.value === "dolar") {
    valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(input.value / dolarToday);
    nomeMoeda.innerHTML = "Dólar";
  }
  if (selectFLag.value === "euro") {
    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "EUR",
    }).format(input.value / euroToday);
    nomeMoeda.innerHTML = "Euro";
  }
  if (selectFLag.value === "libra") {
    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "GBP",
    }).format(input.value / libraToday);
  }
  if(selectFLag.value === "bitcoin"){
    valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR',{style: "currency", currency:'BTC'}).format(input.value/ bitcoinToday)
  }

  currencyBr.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(input.value); //valor digitado no input
}
convertButton.addEventListener("click", (event) => {
  event.preventDefault();
  moeda();
});

// if (input.value === "" || input.value != Number(input.value)) {
//   alert("Digite um valor válido");
// }
selectFLag.addEventListener("change", () => {
  if (selectFLag.value === "dolar") {
    img.src = "assets/usa.png";
    nomeMoeda.innerHTML = "Dólar Americano";
  }
  if (selectFLag.value === "euro") {
    img.src = " assets/euro.png";
    nomeMoeda.innerHTML = "Euro";
  }
  if (selectFLag.value === "libra") {
    img.src = "assets/libra.png";
    nomeMoeda.innerHTML = "Libra"
  }
  if (selectFLag.value === "bitcoin") {
    img.src = "assets/bitcoin.png";
    nomeMoeda.innerHTML = "Bitcoin"
  }
  moeda();
});
