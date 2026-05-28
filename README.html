PASSO A PASSO NA LÓGICA DA APLICAÇÃO CONVERT-MONEY:

1- ADICIONAR NO SELECT UMA TAG OPTION PARA CRIAR A LIBRA E OUTRA TAG OPTION PARA CRIAR O BITCOIN = OK

2- CRIAR AS VARIAVEIS DAS NOVAS MOEDAS DENTRO DA FUNÇÃO convertValues() E DEPOIS CRIAR OS CALCULOS = OK

3- CHAMAR AS NOVAS IMAGENS, DAS NOVAS MOEDAS, QUANDO O USUARIO MUDAR DE OPÇÃO NA TAG OPTION, DENTRO DO SELECT:
    <select class="currency-select"> = OK

4- DENTRO DO SELECT: <select class="currency-select"> CRIAR OS VALORES, DAS NOVAS OPÇÕES.
EX:
    <option value="libra">£ Libra</option>
    <option value="bitcoin">₿ Bitcoin</option> = OK

5- CHAMAR A NOVA LABEL <p class="currency" id="currency-name">Euro</p> = OK

6- FAZER O CALCULO QUE O USUARIO INSERIR DENTRO DO INPUT QUE ESTÁ DENTRO DA LABEL FUNCIONAR: 
EX:
		<label>
            Valor
            <input class="input-currency" placeholder="R$ 10.000,00">  
        </label> = OK


7- RESULTADO TEM QUE APARECER EM REAL (MESMO VALOR INSERIDO PELO USUARIO DENTRO DO INPUT )
<p class="currency-value-to-convert">R$ 10.000,00</p>

8- RESULTADO TEM QUE APARECER NO VALOR DO CALCULO CONVERTIDO, DEPEDENDO DA MOEDA SELECIONADA, VALOR TEM QUE SER ALTERADO.
EX: NO DOLAR E LIBRA

DOLAR:
<p class="currency-value">$1,923.08</p>

LIBRA:
<p class="currency-value">£1,388.89</p>


PASSO A PASSO NA LÓGICA VERSÃO: 2.0 DA APLICAÇÃO CONVERT-MONEY:

1- INSERÇÃO DE NOVAS OPÇÕES DE CONVERSÃO ALÉM DO REAL.
NOVAS OPÇÕES:
    <option value="dolar">US$ Dólar americano</option>
    <option value="euro">€ Euro</option>
    <option value="libra">£ Libra</option>
    <option value="bitcoin">₿ Bitcoin</option>


2- ACRESCENTAR MUDANÇA DE LOGO AO ALTERAR AS OPÇÕES A SEREM CONVERTIDAS.
CRIAÇÃO DA CLASSE NO HTML:
  <select class="currency-select-convert">

3- CRIAÇÃO DA VARIAVEL NO JS:
const currencySelectConvert = document.querySelector(".currency-select-convert")


4- CRIAÇÃO DA LÓGICA, PARA ALTERAR A LABEL E AS IMAGENS (LOGO).
    OBS: -PRECISEI CRIAR UMA NOVA FUNÇÃO com duas novas variaveis: changeSelectConvert():


function changeSelectConvert(){
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

    //  convertValues()

}



5- NOVA ESTRUTURA NA LÓGICA, COM BASE EM PESQUISAS, ACABEI UTILIZANDO OUTRA ESTRUTURA NO JS:


## O que mudou e por que essa lógica funciona?

* Uso de Objetos (currencyRates e currencyConfigs): Em vez de escrever dezenas de estruturas if/else, criamos dicionários de dados. Quando o usuário altera o select para dolar, o JavaScript busca direto o valor dentro desse mapa [1]. Isso deixa seu código limpo e fácil de manter.

* A Fórmula Matemática Universal: Para fazer a conversão cruzada direta (ex: Dólar para Libra), o sistema primeiro converte o valor digitado para Real multiplicando-o pela sua própria taxa. Em seguida, divide esse resultado pela taxa da moeda final [1].

* Placeholder Dinâmico: Na função changeSelectConvert, a linha inputCurrency.placeholder = currencyConfigs[selected].placeholder lê o valor configurado no objeto e atualiza o campo de texto instantaneamente assim que o usuário clica na moeda de origem.

* Atualização em tempo real: Adicionei a chamada do convertValues() no final de cada mudança de select. Assim, se já houver um número digitado, os valores mudam na tela sem que o usuário precise clicar no botão de converter novamente.

Se quiser evoluir ainda mais o projeto, qual funcionalidade deveríamos adicionar agora?

* Buscar as taxas de câmbio em tempo real através de uma API gratuita.
* Criar um botão de inverter para trocar a moeda de origem com a de destino com um clique.
* Adicionar uma validação para impedir que o usuário converta uma moeda para ela mesma.


