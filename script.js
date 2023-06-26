let nome = "button"
console.log (nome)

// Obtendo uma referência ao botão e à div de resultado
let btnExecutar = document.getElementById( "btnExecutar" );
let resultado = document.getElementById( "resultado");
// Adicionando um evento de clique ao botão
btnExecutar.addEventListener( "click", function() {
    //Definindo uma Variável
    let nome = "Maria";
    // Criando um array de frutas
    let frutas = [ "maça", "banana", "laranja"];
    // Concatenando variáveis e elementos do array
    let mensagem = "Olá, " "+ nome + "! As frutas são: " + frutas.join(' , '); 
    // Alterando o conteúdo da div de resultado
    resultado.innerHTML = mensagem; 


});