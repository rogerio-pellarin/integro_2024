var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) 
{
    const apples_per_box = 4;
    const boxes_per_pack = 2;
    const packs_per_friends = 2;
    let boxes = [];
    let packs = [];
    let friends = [];

    //Se clasifican las manzanas por caja
    for ( let number_apple = 0; number_apple < input.length; number_apple += apples_per_box ) 
    {
        let box = input.slice(number_apple, number_apple + apples_per_box);
        boxes.push(box);
    }

    //Se clasifica las cajas por paquetes
    for ( let number_box = 0; number_box < boxes.length; number_box += boxes_per_pack ) 
    {
        let pack = boxes.slice(number_box, number_box + boxes_per_pack);
        packs.push(pack);
    }

    //Se clasifican los paquetes por amigos
    for ( let number_pack = 0; number_pack < boxes.length; number_pack += packs_per_friends ) 
    {
        let friend = packs.slice(number_pack, number_pack + packs_per_friends);
        friends.push(friend);
    }

    return friends;

}

const result = apples(input);
console.log(result)