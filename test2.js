var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) {
    const applesPerBox = 4;
    const boxesPerPack = 2;
    const packsPerFriend = 2;

    const result = {};

    let friendIndex = 0;
    let packIndex = 0;
    let boxIndex = 0;

    while (input.length > 0) {
        if (!result[friendIndex]) {
            result[friendIndex] = [];
        }

        if (!result[friendIndex][packIndex]) {
            result[friendIndex][packIndex] = [];
        }

        if (!result[friendIndex][packIndex][boxIndex]) {
            result[friendIndex][packIndex][boxIndex] = [];
        }

        for (let i = 0; i < applesPerBox && input.length > 0; i++) {
            result[friendIndex][packIndex][boxIndex].push(input.shift());
        }

        boxIndex++;

        if (boxIndex >= boxesPerPack || input.length === 0) {
            boxIndex = 0;
            packIndex++;
        }

        if (packIndex >= packsPerFriend || input.length === 0) {
            packIndex = 0;
            friendIndex++;
        }
    }

    return result;
}
// output initial
console.log(apples(input))
// output data required 
console.log(JSON.stringify(apples(input), null, 2));
