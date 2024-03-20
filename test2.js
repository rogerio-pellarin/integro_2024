// solution with FOR:
// var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// function apples(input) {
//   const numberOfApples = input.length;
//   const fixedQuantity = 4;
//   let boxes = [];
//   const packs = [];

//   for (let index = 0; index < numberOfApples; index += 4) {
//     let box = input.slice(index, index + fixedQuantity);
//     boxes.push(box);
//   }

//   for (let index = 0; index < boxes.length; index += 2) {
//     let pack = boxes.slice(index, index + 2);
//     packs.push(pack);
//   }

//   return packs;
// }

// console.log(apples(input));

// solution with reduce and splice:

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const fixedQuantity = 4;

function divideArrayIntoGroups(input) {
  return input.reduce((result, element, index, array) => {
    if (index % fixedQuantity === 0) {
      result.push(array.slice(index, index + fixedQuantity));
    }
    return result;
  }, []);
}

function apples(input) {
  return divideArrayIntoGroups(input, fixedQuantity).reduce(
    (result, element, index, array) => {
      if (index % 2 === 0) {
        result.push(array.slice(index, index + 2));
      }
      return result;
    },
    []
  );
}

console.log(apples(input));
