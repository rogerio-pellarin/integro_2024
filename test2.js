var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

function apples(input) {

    let groupSize       = 4;
    let count           = 0;
    let friendsList     = [[], []];
    let organizedGroups = [];

    // organize the array by the amount indicated in groupSize
    for (let i = 0; i < input.length; i += groupSize) {
        organizedGroups.push(input.slice(i, i + groupSize));
    }

    // calculate the number of friends among whom the division will be made
    let friends = Math.ceil(organizedGroups.length/4);

    // separate the packages into boxes of 2 by 2 for each friend
    for (let i = 0; i < friends; i ++) {
        friendsList[i]=[];
        for (let j = 0; j < 2; j ++) {
            friendsList[i][j]=[];
            for (let k = 0; k < 2; k ++) {
                if(count < organizedGroups.length){
                    friendsList[i][j].push(organizedGroups[count]);
                    count++;
                }
            }
        }
    }

    return friendsList;
}

console.log(apples(input))
