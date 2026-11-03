let filas = 5;

for (let i = 1; i <= filas; i++) {
    let numeros = "";

    for (let j = 1; j <= i; j++) {
        numeros += j + " ";
    }

    console.log(numeros);
}


for (let i = filas - 1; i >= 1; i--) {
    let numeros = "";

    for (let j = 1; j <= i; j++) {
        numeros += j + " ";
    }

    console.log(numeros);
}