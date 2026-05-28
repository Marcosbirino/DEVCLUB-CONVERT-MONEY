const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectConvert = document.querySelector(".currency-select-convert")

// 1. Definição das taxas de conversão tendo o Real (BRL) como base de cálculo
const currencyRates = {
    real: 1.0,
    dolar: 4.92,
    euro: 5.80,
    libra: 6.70,
    bitcoin: 395000.00
}

// 2. Mapeamento de configurações visuais de formatação e elementos de tela
const currencyConfigs = {
    real: {
        name: "Real Brasileiro",
        img: "./assets/real.png",
        placeholder: "R$ 10.000,00",
        locale: "pt-BR",
        currencyCode: "BRL",
        digits: {}
    },
    dolar: {
        name: "Dólar americano",
        img: "./assets/dolar.png",
        placeholder: "US$ 10,000.00",
        locale: "en-US",
        currencyCode: "USD",
        digits: {}
    },
    euro: {
        name: "Euro",
        img: "./assets/euro.png",
        placeholder: "€ 10.000,00",
        locale: "de-DE",
        currencyCode: "EUR",
        digits: {}
    },
    libra: {
        name: "Libra",
        img: "./assets/libra.png",
        placeholder: "£ 10,000.00",
        locale: "en-GB",
        currencyCode: "GBP",
        digits: {}
    },
    bitcoin: {
        name: "Bitcoin",
        img: "./assets/bitcoin.png",
        placeholder: "₿ 1.00000000",
        locale: "pt-BR",
        currencyCode: "BTC",
        digits: { minimumFractionDigits: 8, maximumFractionDigits: 8 }
    }
}

// Função principal que realiza o cálculo matemático universal e atualiza a tela
function convertValues() {
    const inputCurrency = document.querySelector(".input-currency")
    const inputCurrencyValue = parseFloat(inputCurrency.value) || 0 // Evita quebra caso o input esteja vazio
    
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") 
    const currencyValueConverted = document.querySelector(".currency-value")

    const fromCurrency = currencySelectConvert.value // Moeda de origem selecionada
    const toCurrency = currencySelect.value // Moeda de destino selecionada

    // LÓGICA MATEMÁTICA: Transforma o valor inicial em Real, depois transforma no valor final desejado
    const valueInReal = inputCurrencyValue * currencyRates[fromCurrency]
    const finalValue = valueInReal / currencyRates[toCurrency]

    // Formata o valor digitado na moeda de origem
    const configFrom = currencyConfigs[fromCurrency]
    currencyValueToConvert.innerHTML = new Intl.NumberFormat(configFrom.locale, {
        style: 'currency',
        currency: configFrom.currencyCode,
        ...configFrom.digits
    }).format(inputCurrencyValue)

    // Formata o valor final convertido na moeda de destino
    const configTo = currencyConfigs[toCurrency]
    currencyValueConverted.innerHTML = new Intl.NumberFormat(configTo.locale, {
        style: 'currency',
        currency: configTo.currencyCode,
        ...configTo.digits
    }).format(finalValue)
}

// Atualiza a interface gráfica da moeda de ORIGEM (Esquerda) e altera o placeholder
function changeSelectConvert() {
    const currencyNameConvert = document.querySelector('#currency-name-convert')
    const currencyLogo = document.querySelector('.logo-real')
    const inputCurrency = document.querySelector(".input-currency")
    
    const selected = currencySelectConvert.value
    
    // Altera nome, imagem e o placeholder conforme a seleção do usuário
    currencyNameConvert.innerHTML = currencyConfigs[selected].name
    currencyLogo.src = currencyConfigs[selected].img
    inputCurrency.placeholder = currencyConfigs[selected].placeholder

    convertValues() // Recalcula na hora para atualizar os valores exibidos
}

// Atualiza a interface gráfica da moeda de DESTINO (Direita)
function changeCurrency() {
    const currencyName = document.querySelector('#currency-name')
    const currencyImg = document.querySelector('.currency-img')
    
    const selected = currencySelect.value

    currencyName.innerHTML = currencyConfigs[selected].name
    currencyImg.src = currencyConfigs[selected].img

    convertValues() // Recalcula na hora para atualizar os valores exibidos
}

// Eventos de escuta
currencySelectConvert.addEventListener('change', changeSelectConvert)
currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)
