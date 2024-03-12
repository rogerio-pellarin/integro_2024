var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) { // there is a basket with a variable number of apples (e.g., 17)
    const appleBox = 4; // each box containing a fixed quantity (e.g., 4 apples)
    const packsBox = 2; // with each pack consisting of two boxes
    const packsFinish = []; 

    while (input.length > 0) {
        const boxes = [];
        for (let i = 0; i < packsBox; i++) {
            const box = input.splice(0, appleBox);
            boxes.push(box);
        }
        packsFinish.push(boxes);
    }
    return packsFinish;
}
console.log(apples(input))


