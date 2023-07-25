let peso = parseInt (prompt("Ingrese su peso"));
let estatura = parseInt (prompt("Ingrese su estatura"));

function imc (peso, estatura) {
    let resultado = peso /(estatura * estatura);
    return resultado;
}

let resultadoImc = imc(peso, estatura);
alert (`Su IMC es de ${resultadoImc}`);

