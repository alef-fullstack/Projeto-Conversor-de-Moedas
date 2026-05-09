const convertButton = document.querySelector(".convert-button")
const currencySelectFrom = document.querySelector(".currency-select-from")
const currencySelectTo = document.querySelector(".currency-select-to")

const exchangeRates = {
    "real": 1,
    "dolar": 4.92,
    "euro": 5.80,
    "libra": 6.70,
    "bitcoin": 394300.96,
    "rublo": 0.066,
    "yuan": 0.72
}

const currencyInfo = {
    "real": { name: "Real", image: "./assets/brasil 2.png", locale: "pt-BR", code: "BRL" },
    "dolar": { name: "Dólar Americano", image: "./assets/estados-unidos (1) 1.png", locale: "en-US", code: "USD" },
    "euro": { name: "Euro", image: "./assets/euro.png", locale: "de-DE", code: "EUR" },
    "libra": { name: "Libra", image: "./assets/libra 1.png", locale: "en-GB", code: "GBP" },
    "bitcoin": { name: "BTC", image: "./assets/bitcoin 1.png", locale: "en-US", code: "BTC" },
    "rublo": { name: "Rublo Russo", image: "./assets/rublo.png", locale: "ru-RU", code: "RUB" },
    "yuan": { name: "Yuan", image: "./assets/yuan-chines.png", locale: "zh-CN", code: "CNY" }
}

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    
    const fromCurrency = currencySelectFrom.value
    const toCurrency = currencySelectTo.value
    
    // Converter para Real primeiro, depois para a moeda de destino
    const valueInReal = inputCurrencyValue * exchangeRates[fromCurrency]
    const convertedValue = valueInReal / exchangeRates[toCurrency]
    
    // Formatar moeda de origem
    currencyValueToConvert.innerHTML = new Intl.NumberFormat(currencyInfo[fromCurrency].locale, {
        style: "currency",
        currency: currencyInfo[fromCurrency].code,
        minimumFractionDigits: fromCurrency === "bitcoin" ? 8 : 2
    }).format(inputCurrencyValue)
    
    // Formatar moeda de destino
    currencyValueConverted.innerHTML = new Intl.NumberFormat(currencyInfo[toCurrency].locale, {
        style: "currency",
        currency: currencyInfo[toCurrency].code,
        minimumFractionDigits: toCurrency === "bitcoin" ? 8 : 2
    }).format(convertedValue)
}

function changeFromCurrency() {
    const currencyNameFrom = document.getElementById("currency-name-from")
    const currencyImageFrom = document.querySelector(".currency-image-from")
    
    const selectedCurrency = currencySelectFrom.value
    currencyNameFrom.innerHTML = currencyInfo[selectedCurrency].name
    currencyImageFrom.src = currencyInfo[selectedCurrency].image
    
    convertValues()
}

function changeToCurrency() {
    const currencyNameTo = document.getElementById("currency-name-to")
    const currencyImageTo = document.querySelector(".currency-image-to")
    
    const selectedCurrency = currencySelectTo.value
    currencyNameTo.innerHTML = currencyInfo[selectedCurrency].name
    currencyImageTo.src = currencyInfo[selectedCurrency].image
    
    convertValues()
}

currencySelectFrom.addEventListener("change", changeFromCurrency)
currencySelectTo.addEventListener("change", changeToCurrency)
convertButton.addEventListener("click", convertValues)

