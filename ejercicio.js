const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(pregunta) {
    return new Promise((resolve) => {
        rl.question(pregunta, resolve);
    });
}

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function clasificarIMC(imc) {
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc < 25) {
        return "Normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}

async function programaIMC() {

    console.log("\n### CALCULADORA DE IMC ###");

    const pesoTexto = await preguntar("Ingresa tu peso en kg: ");
    const alturaTexto = await preguntar("Ingresa tu altura en metros: ");

    if (pesoTexto.trim() === "" || alturaTexto.trim() === "") {
        console.log("Error: el peso y la altura no pueden estar vacíos.");
        return;
    }

    const peso = Number(pesoTexto);
    const altura = Number(alturaTexto);

    if (Number.isNaN(peso) || Number.isNaN(altura)) {
        console.log("Error: el peso y la altura deben ser números.");
        return;
    }

    if (peso <= 0 || altura <= 0) {
        console.log("Error: el peso y la altura deben ser mayores que 0.");
        return;
    }

    const imc = calcularIMC(peso, altura);
    const clasificacion = clasificarIMC(imc);

    console.log("\n---------- RESULTADO ----------");
    console.log(`Peso: ${peso} kg`);
    console.log(`Altura: ${altura} m`);
    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(`Clasificación: ${clasificacion}`);
}

function fizzBuzz(n) {

    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

async function programaFizzBuzz() {

    console.log("\n### FIZZBUZZ ###");

    const nTexto = await preguntar("Ingresa un número entero positivo: ");

    if (nTexto.trim() === "") {
        console.log("Error: no puedes dejar el campo vacío.");
        return;
    }

    const n = Number(nTexto);

    if (Number.isNaN(n)) {
        console.log("Error: debes ingresar un número.");
        return;
    }

    if (n <= 0) {
        console.log("Error: el número debe ser mayor que 0.");
        return;
    }

    if (!Number.isInteger(n)) {
        console.log("Error: debes ingresar un número entero, no un decimal.");
        return;
    }

    console.log(`\nFizzBuzz del 1 al ${n}:\n`);

    fizzBuzz(n);
}

async function main() {

    let continuar = true;

    while (continuar) {

        console.log(`
1. Calculadora de IMC
2. FizzBuzz
3. Salir
`);

        const opcion = await preguntar("Selecciona una opción: ");

        switch (opcion) {

            case "1":
                await programaIMC();
                break;

            case "2":
                await programaFizzBuzz();
                break;

            case "3":
                console.log("\nPrograma terminado. ¡Hasta luego!");
                continuar = false;
                break;

            default:
                console.log("\nError: opción no válida.");
        }

        console.log("");
    }

    rl.close();
}

main();