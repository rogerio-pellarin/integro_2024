var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function apples(input) {
  let result = [];
  let boxes_quantity = 4;
  let packages_quantity = 2;

  for (let i = 0; i < input.length; i += boxes_quantity * packages_quantity) {
    let group = [];

    for (let j = 0; j < packages_quantity; j++) {
      let slice = input.slice(
        i + j * boxes_quantity,
        i + (j + 1) * boxes_quantity
      );

      if (slice.length > 0) {
        group.push(slice);
      }
    }

    if (group.length > 0) {
      result.push(group);
    }
  }

  return result;
}

console.log(apples(input));
