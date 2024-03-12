var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) {
    const boxSize = 4;
    const packSize = 2;
    const numOfFriends = 2;
  
    const numOfBoxes = Math.ceil(input.length / boxSize);
    const numOfPacks = Math.ceil(numOfBoxes / packSize);
  
    const result = [];
    let friendIndex = 0;
  
    for (let i = 0; i < numOfPacks; i++) {
      const pack = [];
  
      for (let j = 0; j < packSize; j++) {
        const box = [];
  
        for (let k = 0; k < boxSize; k++) {
          const appleIndex = i * packSize * boxSize + j * boxSize + k;
  
          if (appleIndex < input.length) {
            box.push(input[appleIndex]);
            console.log(box)
          } else {
            break;
          }
        }
  
        pack.push(box);
        console.log(pack)
      }
  
      result[friendIndex] = result[friendIndex] ? [...result[friendIndex], pack] : [pack];
  
      if (i % (numOfPacks / numOfFriends) === numOfPacks / numOfFriends - 1) {
        friendIndex++;
      }
    }
  
    return result;
}

console.log(apples(input).toString());
