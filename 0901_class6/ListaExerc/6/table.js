function showTable() {
    num = document.getElementById("numberInput").value;
    num = parseInt(num);
    count = 0;

    if (isNaN(num)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    result = " ";
    do {
        count++;
        result += num + " x " + count + " = " + (num * count) + "<br>";

    } while (count < 10)

    document.getElementById("Table").innerHTML = result;
}