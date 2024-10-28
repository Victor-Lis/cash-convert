const currencies = {
  "USD": {
    value: 4.87,
    symbol: "US$"
  },
  "EUR": {
    value: 5.32,
    symbol: "€"
  },
  "GBP": {
    value: 6.08,
    symbol: "£"
  },
}

const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")

amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (event) => {
  event.preventDefault()

  const symbol = currency.value

  convertCurrency(amount.value, currencies[symbol].value, currencies[symbol].symbol)
}

function convertCurrency(amount, price, symbol) {
  try {
    footer.classList.add("show-result")
 
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    result.textContent = formatCurrencyBRL(amount * price)
  } catch (error) {
    footer.classList.remove("show-result")
    console.log(error)
    alert("Não foi possível converter, tente mais tarde...")
  } 
}

const formatCurrencyBRL = (value) => Number(value).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
})