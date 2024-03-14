// input: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

// output: {
//   [ //friend 1
//     [ //package 1
//       [1,2,3,4], //box1
//       [5,6,7,8] //box2
//     ],
//     [ //package 2
//       [9,10,11,12], //box3
//       [13,14,15,16] //box 4
//     ]
//   ],
//   [ //friend 2
//     [ //package 2
//       [17] //box 5 - this box is incomplete, because only 1 apple left
//     ]
//   ]
// }


var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) {
    let numFriends = 2;
    let packageSize = 4;

    let result = [];

    while (input.length > 0) {
        let friends = [];

        for (let i = 0; i < numFriends; i++) {
            let boxes = [];

            let pack = input.splice(0, packageSize);

            if (pack.length > 0) {
                boxes.push(pack);
            }

            friends.push(boxes);
        }

        result.push(friends);
    }

    return result;
}

console.log(apples(input))
