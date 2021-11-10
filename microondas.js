
/* 5 opções de comida com seus respectivos tempos pré-definidos. */
/* Tipos de alimentos */
var tipoProduto = {
    /*1*/ Pipoca: 10, /*padrão*/
    /*2*/ Macarrao: 8, /*padrão*/
    /*3*/ Carne: 15, /*padrão*/
    /*4*/ Feijao: 12, /*padrão*/
    /*5*/ Brigadeiro: 8 /*padrão*/
};

/* Pratos cadastrados */
var nomeProduto = function (tipoProduto) {
    if (tipoProduto=="Pipoca" || 
    tipoProduto=='Macarrão' || 
    tipoProduto=='Carne' || 
    tipoProduto=='Feijão' ||
    tipoProduto=='Brigadeiro')

    {
        return `Preparando ${tipoProduto}.`
    }
    
    else { return `Prato inexistente` }
}

/* Escolha do produto */
    console.log(nomeProduto("Carne"))

/* Resultado do preparo */
var resultado = function (msg) { 
    let produto = tipoProduto.Carne
    
    if ( msg > (2* produto) && msg <= (3* produto)){
        return "Você queimou a comida :(" /*Maior que 2x exibir mensagem que a comida queimou.*/
    }

    if (msg < produto){
        return "Tempo insuficiente." /*Menor que o padrão, exibir a mensagem: "tempo insuficiente"*/
    }

    if (produto *3 < msg){ /*Se o tempo for 3x maior que o necessário, exibir a mensagem: “kabumm”*/
        return "Kabumm!!!"
    }

    else { return "Prato pronto, bom apetite!!!." } /*No final de cada tarefa, exibir a mensagem: "Prato pronto, bom apetite!!!"*/

    }

    console.log(resultado(30));
