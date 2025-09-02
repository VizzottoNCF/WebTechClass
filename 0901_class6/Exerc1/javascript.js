function exibirNumero() {
    var result = " ";
    var number = 1;

    while (number <= 10) {
        result += number + " ";
        number++;
    }
    alert("Resultado: " + result); 
    alert("Numero: " + number); 

    var res = " ";
    var num = 1;
    do {
        res += num + " ";
        num++;
    } while (num <= 10);
    alert("Resultado (do/while): " + res);
    alert("Numero (do/while): " + num);
}