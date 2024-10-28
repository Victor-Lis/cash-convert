# Cash Convert 

## Sinopse do Projeto
Projeto criado a partir do Curso Beta Hub em parceria do Mercado Livre com a RocketSeat.
O projeto visa ser um conversos simples e prático de moedas transformando o Real em possíveis 3 moedas: Dólar, Euro e Libra.

## Melhorias realizadas
### Projeto Original
```css
form {
  background-color: #141534;

  display: flex;
  flex-direction: column;

  padding: 3.5rem 4rem;
}
```

### Meu projeto
```css
form {
  background-color: #141534;

  display: flex;
  flex-direction: column;

  padding: 3.5rem 4rem;
}

@media (max-width: 450px) {
  form{
    padding: 1.5rem 2rem
  }
}
```

Essa pequena, mas significativa mudança é capaz de tornar o layout responsivo em telas mobile (por volta de 320px)

### Projeto Original
```js
//Criando a cotação de moedas do dia
const USD = 5.65;
const EUR = 6.12;
const GBP = 7.35;

form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};
```

### Meu projeto
```js
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

form.onsubmit = (event) => {
  event.preventDefault()

  const symbol = currency.value

  convertCurrency(amount.value, currencies[symbol].value, currencies[symbol].symbol)
}
```

Da forma que realizei a lógica se torna mais enxuta e código mais fácil de entender

## Autores
- [@Victor-Lis](https://www.linkedin.com/in/victor-lis-bronzo)
