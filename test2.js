var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18, 19, 20, 21, 22, 23, 24, 25, 26, 27]

function apples(input) {
    const packageBox = 2;
    const boxApples = 4;
    const response = [];
    let totalPackages = Math.ceil(input.length / (packageBox * boxApples));

    for (let i = 0; i < totalPackages; i++) {
        response.push([]);
        for (let j = 0; j < packageBox; j++) {
            response[i].push([]);
            for (let k = 0; k < boxApples; k++) {
                const apple = input.shift();
                if (apple !== undefined) {
                    response[i][j].push(apple);
                }
            }
        }
    }

    return response;
}

console.log(apples(input))
