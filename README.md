# 💸 Convert-Money

Documentação do passo a passo lógico e evolução do desenvolvimento da aplicação de conversão de moedas.

---

## 📌 Versão 1.0 — Estrutura Inicial e Novas Moedas

### 1. Elementos do Select
Adicionadas as novas tags `option` para criar as opções de Libra e Bitcoin.
```html
<option value="libra">£ Libra</option>
<option value="bitcoin">₿ Bitcoin</option>
```

### 2. Variáveis e Cálculos no JavaScript
Criação das variáveis das novas moedas dentro da função `convertValues()` acompanhadas dos seus respectivos cálculos de conversão.

### 3. Alteração Dinâmica de Imagens
Renderização das novas imagens das moedas assim que o usuário altera a opção selecionada na tag `<select class="currency-select">`.

### 4. Atualização de Labels
Inclusão e chamada da nova label correspondente no HTML:
```html
<p class="currency" id="currency-name">Euro</p>
```

### 5. Captura de Inputs do Usuário
Criação da lógica para receber o valor inserido pelo usuário dentro do campo de texto:
```html
<label>
    Valor
    <input class="input-currency" placeholder="R\$ 10.000,00">  
</label>
```

### 6. Exibição dos Resultados
* **Valor a converter:** O resultado em Real permanece idêntico ao inserido pelo usuário.
  ```html
  <p class="currency-value-to-convert">R\$ 10.000,00</p>
  ```
* **Valor convertido:** O resultado final altera o formato da moeda dinamicamente conforme a seleção.
  * **Dólar:** `<p class="currency-value">$1,923.08</p>`
  * **Libra:** `<p class="currency-value">£1,388.89</p>`

---

## 🚀 Versão 2.0 — Conversão Avançada e Refatoração

### 1. Novas Opções de Origem
Inserção de novas opções de conversão que vão além do Real Brasileiro:
```html
<option value="dolar">US\$ Dólar americano</option>
<option value="euro">€ Euro</option>
<option value="libra">£ Libra</option>
<option value="bitcoin">₿ Bitcoin</option>
```

### 2. Mudança de Logos e Nova Classe
Implementação de uma nova classe no select do HTML para identificar a moeda que sofrerá a conversão:
```html
<select class="currency-select-convert"></select>
```

### 3. Manipulação do DOM no JavaScript
Mapeamento do novo elemento select através da variável:
```javascript
const currencySelectConvert = document.querySelector(".currency-select-convert")
```

### 4. Função `changeSelectConvert()`
Desenvolvimento da lógica condicional para atualizar textualmente as labels e as imagens de logo correspondentes na tela:

```javascript
function changeSelectConvert() {
    const currencyNameConvert = document.querySelector('#currency-name-convert') 
    const currencyLogo = document.querySelector('.logo-real')

    if (currencySelectConvert.value == 'real') {
        currencyNameConvert.innerHTML = 'Real Brasileiro'
        currencyLogo.src = './assets/real.png'
    }
    if (currencySelectConvert.value == 'dolar') {
        currencyNameConvert.innerHTML = 'Dólar americano'
        currencyLogo.src = './assets/dolar.png'
    }
    if (currencySelectConvert.value == 'euro') {
        currencyNameConvert.innerHTML = 'Euro'
        currencyLogo.src = './assets/euro.png'
    }
    if (currencySelectConvert.value == 'libra') {
        currencyNameConvert.innerHTML = 'Libra'
        currencyLogo.src = './assets/libra.png'
    }
    if (currencySelectConvert.value == 'bitcoin') {
        currencyNameConvert.innerHTML = 'Bitcoin'
        currencyLogo.src = './assets/bitcoin.png'
    }

    // convertValues()
}
```

---

## 💡 O que mudou e por que essa lógica funciona?

* **Uso de Objetos (`currencyRates` e `currencyConfigs`):** Em vez de escrever dezenas de estruturas `if/else`, foram criados dicionários de dados. Quando o usuário altera o select para dólar, o JavaScript busca o valor direto dentro desse mapa. Isso deixa o código limpo e fácil de manter.
* **A Fórmula Matemática Universal:** Para fazer a conversão cruzada direta (ex: Dólar para Libra), o sistema primeiro converte o valor digitado para Real multiplicando-o pela sua própria taxa. Em seguida, divide esse resultado pela taxa da moeda final.
* **Placeholder Dinâmico:** Na função `changeSelectConvert`, a linha `inputCurrency.placeholder = currencyConfigs[selected].placeholder` lê o valor configurado no objeto e atualiza o campo de texto instantaneamente assim que o usuário clica na moeda de origem.
* **Atualização em Tempo Real:** Adicionada a chamada do `convertValues()` no final de cada mudança de select. Assim, se já houver um número digitado, os valores mudam na tela sem que o usuário precise clicar no botão de converter novamente.
