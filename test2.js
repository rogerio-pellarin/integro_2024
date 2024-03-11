function apples(apples) {
  const boxSize = 4; // Size of the box
  const packSize = 2; // Size of the pack
  const friends = []; // Array to store friends and their packs

  let currentBox = []; // Array to store the current box
  let currentPack = []; // Array to store the current pack

  // Iterate over the apples
  for (let i = 0; i < apples.length; i++) {
    // Add the apple to the current box
    currentBox.push(apples[i]);

    // If the current box is full
    if (currentBox.length === boxSize) {
      // Add the box to the current pack
      currentPack.push(currentBox);

      // If the current pack is full
      if (currentPack.length === packSize) {
        // Add the pack to the current friend
        friends.push(currentPack);

        // Reset the current pack
        currentPack = [];
      }

      // Reset the current box
      currentBox = [];
    }
  }

  // If there are remaining apples in the current box, add the box to the current pack
  if (currentBox.length > 0) {
    currentPack.push(currentBox);
  }

  // If there are remaining boxes in the current pack, add the pack to the current friend
  if (currentPack.length > 0) {
    friends.push(currentPack);
  }

  return friends;
}

var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log(apples(input));
