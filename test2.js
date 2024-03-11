var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

function organizeApples(input) {
    const applesPerBox = 4;
    const boxesPerPack = 2;
    const packsPerFriend = 2;

    // Crear una copia del array input
    let applesCopy = [...input];

    let result = [];
    let friendIndex = 0;

    while (applesCopy.length > 0) {
        let friendPackages = [];

        for (let packIndex = 0; packIndex < packsPerFriend; packIndex++) {
            let packageBoxes = [];

            for (let boxIndex = 0; boxIndex < boxesPerPack; boxIndex++) {
                let boxApples = applesCopy.splice(0, applesPerBox);
                packageBoxes.push(boxApples);
            }

            friendPackages.push(packageBoxes);
        }

        result.push(friendPackages);
    }

    return result;
}

// Entrada 
console.log("Entrada:");
console.log(input);

// Salida requerida
console.log("Salida requerida:");
console.log(JSON.stringify(organizeApples(input), null, 2));



// Explicacion del codigo 

/* 
Este código utiliza manejo de entrada dinámica para manejar cualquier cantidad de manzanas en la entrada.
Organiza las manzanas en cajas y paquetes utilizando bucles for anidados para garantizar una distribución adecuada.
Crea una copia del array de entrada para evitar modificar el original, utilizando el operador de propagación (...).
La salida se produce en formato JSON para coincidir con el formato especificado en la prueba.
Se ha diseñado para garantizar un manejo adecuado de la entrada dinámica, la organización correcta de las manzanas en cajas y paquetes, y la producción de la salida requerida en el formato especificado.
Se tomó la decisión de crear una copia del array de entrada y utilizar bucles while y for anidados para lograr estos objetivos de manera eficiente y precisa.
*/

