var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) {

    const applesInBox = 4; 
    const boxesInPack = 2; 
    const packsPerFriend = 2; 

    const totalApples = input.length;

    const applesPerPack = applesInBox * boxesInPack;

    const totalPacks = Math.floor(totalApples / applesPerPack);

    const friends = Math.floor(totalPacks / packsPerFriend);

    const remainingApples = totalApples - (friends * packsPerFriend * applesPerPack);

    return {
        friends: friends,
        remainingApples: remainingApples
    };

}

console.log(apples(input))
