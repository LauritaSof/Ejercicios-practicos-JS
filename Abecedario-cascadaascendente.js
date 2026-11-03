let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 1; i <= letras.length; i++) {
    let resultado = "";

    for (let j = 0; j < i; j++) {
        resultado += letras[j];
    }

    console.log(resultado);
}