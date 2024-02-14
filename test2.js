var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

/**
 * split an array into chunks of a specific size
 *
 * @param {[]} input
 * @param {number} separation
 */
function splitArrayIntoChunks(input, separation = 4) {
    // Initialize an empty array named chunks to store the divided chunks
    const chunks = [];
    for (let i = 0; i < input.length; i += separation) {
        // is a slice of the input array from index i to i + separation
        const chunk = input.slice(i, i + separation);
        // Push the chunk into the chunks array
        chunks.push(chunk);
    }
    return chunks;
}

/**
 * organize apples
 *
 * @param {[]} input
 * @param {number} separation
 */
function apples(input, separation = 4) {
    const inputLength = input.length;

    //check if separation is valid
    if (inputLength < separation) {
        return "The separator cannot be greater than the number of apples.";
    }

    const boxes = splitArrayIntoChunks(input, (separation = 4));
    const packages = splitArrayIntoChunks(boxes, (separation = 2));
    const friends = splitArrayIntoChunks(packages, (separation = 2));

    return JSON.stringify(friends);
}

console.log(apples(input));
