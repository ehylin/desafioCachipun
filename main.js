const repetir = prompt("Ingrese la cantidad de veces que desea que se repita el juego")

const repetirQty = Number.parseInt(repetir)


console.log(` el usuario quiere que se repita ${repetirQty} veces`);

for (let count = 1; count <= repetirQty; count++) {

    const userMove = prompt("ingrese su jugada, debe ser: piedra, papel o tijera")

    const randomMoveIndex = Math.floor(Math.random() * (4 - 1)) + 1; // 1 o 2 o 3
    let randomMoveText = "";

    if (randomMoveIndex === 1) {
        randomMoveText = "piedra";
    } else if (randomMoveIndex === 2) {
        randomMoveText = "papel";
    } else if (randomMoveIndex === 3) {
        randomMoveText = "tijera";
    } else {
        console.error(`la opcion es invalida: ${randomMoveIndex} `);
    }

    let winner = ""; //machine - user - both

    if (randomMoveText === 'piedra') {
        if (userMove === "papel") {
            winner = "user"
        } else if (userMove === "tijera") {
            winner = "machine"
        } else {
            winner = "both"
        }
    } else if (randomMoveText === 'papel') {
        if (userMove === "tijera") {
            winner = "user"
        } else if (userMove === "piedra") {
            winner = "machine"
        } else {
            winner = "both"
        }
    } else if (randomMoveText === 'tijera') {
        if (userMove === "piedra") {
            winner = "user"
        } else if (userMove === "papel") {
            winner = "machine"
        } else {
            winner = "both"
        }
    } else {
        winner = "unknow"
    }

    //mostrar el resultado
    console.log({ userMove, randomMoveText })
    console.log(`el ganador es: ${winner}`);

    document.write(`<h2>El ganador es : ${winner}</h2>`)



}

