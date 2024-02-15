// Ejecutar con node test2.js

var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function apples(input) {
  const boxSpace = 4;
  const applesTotal = input.length;

  const friendsGift = [];
  let currentFriend = [];
  let giftPackage = [];
  let giftBox = [];

  for (let i = 0; i < applesTotal; i++) {
    if (giftBox.length === boxSpace) {
      giftPackage.push(giftBox);
      giftBox = [];
    }

    if (giftPackage.length === boxSpace) {
      currentFriend.push(giftPackage);
      giftPackage = [];
    }

    giftBox.push(input[i]);

    if (currentFriend.length === 2) {
      friendsGift.push(currentFriend);
      currentFriend = [];
    }
  }

  if (giftBox.length > 0) {
    giftPackage.push(giftBox);
  }

  if (giftPackage.length > 0) {
    currentFriend.push(giftPackage);
  }

  if (currentFriend.length > 0) {
    friendsGift.push(currentFriend);
  }

  return friendsGift;
}

function printResult(totalPackages) {
  totalPackages.forEach((friend) => {
    friend.forEach((package) => {
      package.forEach((box) => {
        console.log(box);
      });
    });
  });
}

const totalPackages = apples(input);
printResult(totalPackages);

// console.log(apples(input));
