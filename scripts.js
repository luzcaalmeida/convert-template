const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//Cotacao de moedas
const USD = 5.2
const EUR = 5.5
const GBP = 6.5

//Manipulando o imput amount para receber apenas numeros
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

//Captura o evento de submit do form
form.onsubmit = (event) => {
  event.preventDefault()
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break

    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break

    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}
//Funcao para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 =  ${formatCurrencuBRL(price)}`

    //mostra o resultado da conversao
    let total = amount * price
    result.textContent = formatCurrencuBRL(amount * price)

    if (isNaN(total)) {
      return alert("Por favor digite um valor válido")
    }

    //aplica a classe para mostrar o resultado
    footer.classList.add("show-result")
  } catch (error) {
    console.log(error)

    //remove a classe para esconder o resultado
    footer.classList.remove("show-result")
    alert("Erro ao converter a moeda, tente novamente mais tarde")
  }
}

function formatCurrencuBRL(value) {
  //Convertendo o numero para o formato Brasileiro de moeda, com 2 casas decimais e separador de milhares em ponto e virgula
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
