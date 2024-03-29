function generatePasswordOptions(selectId) {
    const passwordSelect = document.getElementById(selectId);

    for (let i = 1; i <= 9; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        passwordSelect.appendChild(option);
    }
}
generatePasswordOptions("password1");
generatePasswordOptions("password2");
generatePasswordOptions("password3");



function checkPassword() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var password3 = document.getElementById("password3").value;

    if (password1 === "9" && password2 === "1" && password3 === "1") {
        mostrarResultado("password 1 correcto");
    } else if (password1 === "7" && password2 === "1" && password3 === "4") {
        mostrarResultado("password 2 correcto");
    } else {
        mostrarResultado("password incorrecto");
    }
}

function mostrarResultado(resultado) {
    var resultadoParrafo = document.getElementById("result2");
    resultadoParrafo.textContent = resultado;

    resultadoParrafo.classList.remove("incorrecto");

 
    if (resultado === "password incorrecto") {
        resultadoParrafo.classList.add("incorrecto");
    }
}