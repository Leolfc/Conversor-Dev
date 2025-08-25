const convertButton = document.querySelector(".converterButton");
const currencyBr = document.querySelector(".currency-valueBr");
const input = document.querySelector(".input-currency");
const selectFLag = document.querySelector("#selectFlag");
const img = document.querySelector(".bandeiraEstadosUnidos");
const valorConvertido = document.querySelector(".currency-valueUs");
const nomeMoeda = document.querySelector("#nomeMoeda");

 convertButton.addEventListener("click", (event) => {
  event.preventDefault();
  const dolarToday = 5.42;
  const euroToday = 6.3;

    
    if (selectFLag.value === "dolar") {
    valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(input.value / dolarToday);
    nomeMoeda.innerHTML = "Dólar";
  }
  if (selectFLag.value === "euro") {
    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
      currency: "EUR",
    }).format(input.value / euroToday);
    nomeMoeda.innerHTML = "Euro";
  }


  currencyBr.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(input.value); //valor digitado no input

  if (input.value === "" || input.value != Number(input.value)) {
    alert("Digite um valor válido");
  }

  selectFLag.addEventListener("change", () => {
    if (selectFLag.value === "dolar") {
      img.src = "assets/usa.png";
      nomeMoeda.innerHTML = "Dólar Americano";
    }
    if (selectFLag.value === "euro") {
      img.src = " assets/euro.png";
      nomeMoeda.innerHTML = "Euro";
    }

  });
});
