// --- Seletores de Elementos (Mantém igual) ---
const convertButton = document.querySelector(".converterButton");
const input = document.querySelector(".input-currency");

// Moeda DE (Origem)
const selectConverterDe = document.querySelector("#selectFlagConverter"); // O seu select de "Converter de"
const imgOrigem = document.querySelector(".bandeiraBrasil"); // Imagem da moeda de origem
const nomeMoedaOrigem = document.querySelector(".currency"); // Nome da moeda de origem
const valorOrigem = document.querySelector('.currency-valueBr'); // Valor formatado da moeda de origem

// Moeda PARA (Destino)
const selectConverterPara = document.querySelector("#selectFlag"); // O seu select de "Converter para"
const imgDestino = document.querySelector(".bandeiraEstadosUnidos"); // Imagem da moeda de destino
const nomeMoedaDestino = document.querySelector("#nomeMoeda"); // Nome da moeda de destino
const valorDestino = document.querySelector(".currency-valueUs"); // Valor formatado da moeda de destino


// --- Função Principal de Conversão (A nova lógica está aqui!) ---
function converterMoedas() {
    const valorDigitado = parseFloat(input.value); // Pega o valor do input como número

    // Validação inicial: se não for um número válido, não faz nada.
    if (isNaN(valorDigitado) || valorDigitado <= 0) {
        alert("Por favor, digite um valor numérico válido.");
        return; // Para a execução da função aqui
    }

    const moedaOrigem = selectConverterDe.value;
    const moedaDestino = selectConverterPara.value;

    // Cotações do dia (baseadas em 1 unidade da moeda = X Reais)
    const cotacoes = {
        real: 1,
        dolar: 5.42,
        euro: 6.30,
        libra: 7.32,
        bitcoin: 597943.00
    };

    // --- ETAPA 1: Converter o valor de entrada para REAL ---
    const valorEmReal = valorDigitado * cotacoes[moedaOrigem];

    // --- ETAPA 2: Converter o valor em REAL para a moeda de DESTINO ---
    const valorFinalConvertido = valorEmReal / cotacoes[moedaDestino];


    // --- ATUALIZAR INTERFACE (TEXTOS E VALORES) ---

    // Formata o valor de Origem
    if(moedaOrigem === "real"){
        valorOrigem.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valorDigitado);
    }
    if(moedaOrigem === "dolar"){
        valorOrigem.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(valorDigitado);
    }
    // (Adicionar outros 'ifs' para euro, libra, etc. se quiser)


    // Formata o valor de Destino
    if(moedaDestino === "real"){
        valorDestino.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valorFinalConvertido);
    }
    if(moedaDestino === "dolar"){
        valorDestino.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(valorFinalConvertido);
    }
    if(moedaDestino === "euro"){
        valorDestino.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(valorFinalConvertido);
    }
    if(moedaDestino === "libra"){
        valorDestino.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(valorFinalConvertido);
    }
    if(moedaDestino === "bitcoin"){
        // Bitcoin não tem um formato 'currency' padrão, então formatamos como número.
        valorDestino.innerHTML = "₿ " + valorFinalConvertido.toFixed(8); // Mostra 8 casas decimais
    }
}

// --- Função para trocar a imagem e o nome da moeda ---
function trocarMoeda() {
    const moedaOrigemSelecionada = selectConverterDe.value;
    const moedaDestinoSelecionada = selectConverterPara.value;

    // Objeto com as informações de cada moeda
    const moedasInfo = {
        real: { nome: "Real", img: "assets/brasil.png" },
        dolar: { nome: "Dólar Americano", img: "assets/usa.png" },
        euro: { nome: "Euro", img: "assets/euro.png" },
        libra: { nome: "Libra", img: "assets/libra.png" },
        bitcoin: { nome: "Bitcoin", img: "assets/bitcoin.png" }
    };
    
    // Atualiza a moeda de Origem
    imgOrigem.src = moedasInfo[moedaOrigemSelecionada].img;
    nomeMoedaOrigem.innerHTML = moedasInfo[moedaOrigemSelecionada].nome;

    // Atualiza a moeda de Destino
    imgDestino.src = moedasInfo[moedaDestinoSelecionada].img;
    nomeMoedaDestino.innerHTML = moedasInfo[moedaDestinoSelecionada].nome;
    
    // Roda a conversão sempre que trocar a moeda
    converterMoedas();
}


// --- Event Listeners (Ouvintes de Eventos) ---

// Quando o botão for clicado, converte.
convertButton.addEventListener("click", converterMoedas);

// Quando o select de "Converter DE" for mudado, troca a moeda E converte.
selectConverterDe.addEventListener("change", trocarMoeda);

// Quando o select de "Converter PARA" for mudado, troca a moeda E converte.
selectConverterPara.addEventListener("change", trocarMoeda);