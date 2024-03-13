function organizeApples(apples, boxSize = 4, packsPerFriend = 2) {
    // Function to chunk an array into smaller arrays of a specified size
    function chunkArray(array, size) {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    }

    // Step 1: Divide apples into boxes
    const boxes = chunkArray(apples, boxSize);

    // Step 2: Group boxes into packs
    const packs = chunkArray(boxes, 2); // Assuming a pack consists of 2 boxes

    // Step 3: Distribute packs among friends
    const friends = [];
    for (let i = 0; i < packs.length; i += packsPerFriend) {
        friends.push(packs.slice(i, i + packsPerFriend));
    }

    return friends;
}

// Example usage
const apples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const organizedApples = organizeApples(apples);
console.log(JSON.stringify(organizedApples, null, 2));
