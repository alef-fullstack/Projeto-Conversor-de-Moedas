const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 4.92
    const euroToday = 5.80
    const libraToday = 6.70
    const bitcointoday = 394300.96
    const rubloToday = 0.066
    const yuanToday = 0.72

currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(inputCurrencyValue)

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8,
        }).format(inputCurrencyValue / bitcointoday)

    }

    if (currencySelect.value == "rublo") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB"
        }).format(inputCurrencyValue / rubloToday)

    }

    if (currencySelect.value == "yuan") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputCurrencyValue / yuanToday)

    }



}



function changecurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")

    // Select de cima

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "BTC"
        currencyImage.src = "./assets/bitcoin 1.png"
    }

    if (currencySelect.value == "rublo") {
        currencyName.innerHTML = "Rublo Russo"
        currencyImage.src = "./assets/rublo.png"
    }

    if (currencySelect.value == "yuan") {
        currencyName.innerHTML = "Yuan"
        currencyImage.src = "./assets/yuan-chines.png"
    }

    convertValues()

}

currencySelect.addEventListener("change", changecurrency)
convertButton.addEventListener("click", convertValues)

