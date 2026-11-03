 let filas = 5;

for (let i = 1; i <= filas; i++) {
    let espacios = "";
    let asteriscos = "";

    for (let j = 1; j <= filas - i; j++) {
        espacios += " ";
    }

    for (let k = 1; k <= (2 * i - 1); k++) {
        asteriscos += "*";
    }

    console.log(espacios + asteriscos);
}


for (let i = filas - 1; i >= 1; i--) {
    let espacios = "";
    let asteriscos = "";

    for (let j = 1; j <= filas - i; j++) {
        espacios += " ";
    }

    for (let k = 1; k <= (2 * i - 1); k++) {
        asteriscos += "*";
    }

    console.log(espacios + asteriscos);
}