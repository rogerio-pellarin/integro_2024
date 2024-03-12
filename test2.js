var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) {
    let indexBox = 0;
    let indexPackage = 0;
    let indexFriend = 0;
    let output = [];

    input.forEach(apple => {

        if (indexBox === 4) {
            indexBox = 0;
            indexPackage++;
        }

        if (indexPackage === 2) {
            indexPackage = 0;
            indexFriend++;
        }

        if (!output[indexFriend]) {
            output[indexFriend] = [];
        }

        if (!output[indexFriend][indexPackage]) {
            output[indexFriend][indexPackage] = [];
        }

        if (!output[indexFriend][indexPackage][indexBox]) {
            output[indexFriend][indexPackage][indexBox] = [];
        }

        output[indexFriend][indexPackage][indexBox] = apple;
        
        indexBox++;
    });

    return JSON.stringify(output, null, 2);
}

console.log(apples(input))
