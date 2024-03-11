var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
// var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33] /* tried and worked */

/**
 * 
 * @param array input the array with the elements: frirends, packages, boxes or apples
 * @param number n the dividend to slice the array
 * @param number l the amount of times the recursive algorithm is going to run
 * @returns the array
 */
function apples(input, n, l) { 
    if (n == undefined && l == undefined) {
        n = 4; 
        l = 1;
    }

    const newArray = []
    if (l == 4) {
        return input
    } else {
        for (let i = 0; i < input.length; i += n) {
            newArray.push(input.slice(i, i + n));
        }
    }

    return apples(newArray, n == 4 ? 2 : 2, l += 1);
}

const friendsApplesBoxes = apples(input)
friendsApplesBoxes.forEach((element, index) => {
    console.log(`Friend #${index + 1} packages: `, element);
});
