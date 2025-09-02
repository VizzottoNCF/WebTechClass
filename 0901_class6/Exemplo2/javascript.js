// Declaração da variável
var numero = 1;
// Verificação da condição utilizando ==
if(numero == '1') {
alert("== compara apenas os valores");
}
// Declaração da variável mensagem
var mensagem;
// Verificação da condição utilizando ===, compara valores e tipos
if(numero === "1") {
mensagem = "Nunca executa";
} else {
    mensagem = "Número é diferente de String com o ===";
}
// Utilização do operador ternário para atribuir valor à variável x
var x = (numero === "1") ? "Nunca executa" : "Número é diferente de String com o ===";
// Exibição dos resultados na página
document.write("<p>Resultado da verificação com '===' utilizando if...else: " + mensagem + "</p>");
document.write("<p>Resultado da verificação com '===' utilizando operador ternário: " + x + "</p>");