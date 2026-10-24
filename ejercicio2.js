const videojuegos = [
    {
        id: 1, nombre: "Elden Ring", precio: 999, genero: "RPG"
    },
    {
        id: 2, nombre: "Minecraft", precio: 699, genero: "Sandbox"
    },
    {
        id: 3, nombre: "The Legend of Zelda: Breath of the Wild", precio: 1199, genero: "Aventura"
    },
    {
        id: 4, nombre: "God of War Ragnarök", precio: 1099, genero: "Acción"
    },
    {
        id: 5, nombre: "Resident Evil 4", precio: 899, genero: "Terror"
    }
];
 
const juegosBaratos = videojuegos.filter(videojuego => videojuego.precio <= 1000);
 
const costoTotal = videojuegos.reduce((acumulador, videojuego) => { return acumulador + videojuego.precio; }, 0);
 
const costoPromedio = (costoTotal / videojuegos.length);
 
const mayorAMenor = [...videojuegos].sort((a, b) => b.precio - a.precio);
 
console.log({
    juegosBaratos,
    costoTotal,
    costoPromedio,
    mayorAMenor
});

// Verificar que el arreglo original no fue modificado
console.log("Arreglo original:", videojuegos);