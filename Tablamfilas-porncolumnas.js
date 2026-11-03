let m = 4;
let n = 5;
let caracter = "*";

for (let i = 1; i <= m; i++) {
    let fila = "";

    for (let j = 1; j <= n; j++) {
        fila += caracter + " ";
    }

    console.log(fila);
}