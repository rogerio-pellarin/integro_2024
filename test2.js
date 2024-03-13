function organizeApples(apples, applesPerBox, boxesPerPackage) {
  const output = [];
  let currentFriend = 0;
  let currentPackage = 0;
  let currentBox = 0;

  while (apples.length > 0) {
    output[currentFriend] = output[currentFriend] || [];
    output[currentFriend][currentPackage] =
      output[currentFriend][currentPackage] || [];

    const remainingApples =
      applesPerBox -
      (output[currentFriend][currentPackage][currentBox]?.length || 0);

    const selectedApples = apples.splice(0, remainingApples);
    output[currentFriend][currentPackage][currentBox] = selectedApples;

    currentBox++;

    if (currentBox === boxesPerPackage) {
      currentBox = 0;
      currentPackage++;
    }

    if (currentPackage === 2) {
      currentPackage = 0;
      currentFriend++;
    }
  }

  return output;
}

const apples = Array.from({ length: 17 }, (_, i) => i + 1); // example with 17 apples
const applesPerBox = 4;
const boxesPerPackage = 2;

const result = organizeApples(apples, applesPerBox, boxesPerPackage);
console.log(result);
