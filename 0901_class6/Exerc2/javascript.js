var alertCount = 0;

function alertButtonPressed() {
    if (alertCount < 5) {
        alertCount++;
        alert("Botão pressionado! " + alertCount);
    } else { alert("Número máximo de alertas atingido."); }
}