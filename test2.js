var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function apples(input) {
  const boxSize = 4;
  const boxesByPack = 2;
  if (boxSize > 0 && boxesByPack > 0 && input.length > 0) {
    const appleSize = input.length;
    const boxes = Math.ceil(appleSize / boxSize);
    let appleList = [],
      finalList = [],
      boxesOrganized = 0;

    let currentList = [];
    for (let i = 0; i < appleSize; i++) {
      currentList.push(input[i]);

      if ((i + 1) % boxSize === 0 || i + 1 === appleSize) {
        appleList.push(currentList);
        boxesOrganized++;
        currentList = [];

        if (boxesOrganized % boxesByPack === 0 || i + 1 === appleSize) {
          finalList.push(appleList);
          appleList = [];
        }
      }
    }

    return finalList;
  } else {
    return [];
  }
}

console.log(apples(input));
