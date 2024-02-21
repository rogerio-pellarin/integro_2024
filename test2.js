var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) {
    const boxSize = 4; // Tamaño de cada caja
    const packsPerFriend = 2; // Paquetes por amigo

    // Organizar las manzanas en cajas y luego en paquetes
    const organizedApples = [];
    let friendIndex = 0;
    let packageIndex = 0;
    let boxIndex = 0;

    for (let i = 0; i < input.length; i++) {
        if (!organizedApples[friendIndex]) {
            organizedApples[friendIndex] = [];
        }
        if (!organizedApples[friendIndex][packageIndex]) {
            organizedApples[friendIndex][packageIndex] = [];
        }
        if (!organizedApples[friendIndex][packageIndex][boxIndex]) {
            organizedApples[friendIndex][packageIndex][boxIndex] = [];
        }

        organizedApples[friendIndex][packageIndex][boxIndex].push(input[i]);

        if (organizedApples[friendIndex][packageIndex][boxIndex].length === boxSize) {
            boxIndex++;
            if (boxIndex === 2) {
                boxIndex = 0;
                packageIndex++;
                if (packageIndex === packsPerFriend) {
                    packageIndex = 0;
                    friendIndex++;
                }
            }
        }
    }

    return organizedApples;

}

console.log(apples(input))
