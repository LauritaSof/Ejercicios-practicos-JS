let filas = 5;

for (let i = 1; i <= (2 * filas - 1); i++) {

    let espacios = Math.abs(filas - i);
    let asteriscos = 2 * (filas - espacios) - 1;

    let resultado = " ".repeat(espacios) + "*".repeat(asteriscos);

    console.log(resultado);
}