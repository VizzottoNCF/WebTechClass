function sumInput() {
    val1 = document.getElementById("input1").value;
    val2 = document.getElementById("input2").value;

    result = parseFloat(val1) + parseFloat(val2);

    if (isNaN(result)) {
        alert("Por favor, insira números válidos nos dois campos.");
        return;
    }
    alert("A soma dos valores é: " + result);
}