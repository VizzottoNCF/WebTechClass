function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');

    valid = true;
    var Soma;
    var Resto;
    var strCPF = cpf.toString();
    Soma = 0;
    if (cpf == "00000000000") {valid = false;}
    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) {valid = false;}

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) {valid = false;}
        

    if (isNaN(cpf) || cpf.length !== 11 || !valid) {
        alert("CPF inválido. Deve conter 11 dígitos numéricos.");
        return false;
    }
    return true;
}

function validarFormulario() {
    cpf = document.getElementById("CPF").value;
    nome = document.getElementById("nome").value;
    email = document.getElementById("email").value;
    curso = document.getElementById("curso").value;

    validName = false;
    validEmail = false;
    validCurso = false;
    validCPF = validarCPF(cpf);

    if (nome.length > 0) { validName = true; } else { alert("Nome inválido."); }
    if (email.length > 0 && email.includes("@") && email.includes(".")) { validEmail = true; } else { alert("Email inválido."); }
    if (curso.length > 0) { validCurso = true; } else { alert("Curso inválido."); }
    

    if (!validCPF || !validName || !validEmail || !validCurso) {
        alert("Houve um erro com o seu formulário. Verifique seus dados.");
    }
    else {
        alert("Formulário enviado com sucesso!");
    }
}