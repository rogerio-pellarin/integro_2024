var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function apples(input) {
  let result = [];
  let slice_quantity = 4;

  for (let i = 0; i < input.length; i += slice_quantity) {
    result.push(input.slice(i, i + slice_quantity));
  }

  return result;
}

console.log(apples(input));
