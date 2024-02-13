var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) {
    var $arr_friends = new Array();
    var $bag_friend = new Array();
    var $friends = new Array();
    var $package = new Array();
    var $packs = new Array();
    var $box = new Array();
    
    for (i = 0; i < input.length; i++) {
        if($box.length <= 3){
            $box.push(input[i]);
        }else{
            $packs.push($box);
            $box = [];
            $box.push(input[i]);
        }
    } 
    $packs.push($box);
    
    for (i = 0; i < $packs.length; i++) {
        if($package.length <= 1){
            $package.push($packs[i]);
        }else{
            $friends.push($package);
            $package = [];
            $package.push($packs[i]);
        }
    } 
    $friends.push($package);
    
    for (i = 0; i < $friends.length; i++) {
        if($bag_friend.length <= 1){
            $bag_friend.push($friends[i]);
        }else{
            $arr_friends.push($bag_friend);
            $bag_friend = [];
            $bag_friend.push($friends[i]);
        }
    } 
    $arr_friends.push($bag_friend);
    return($arr_friends);
}

console.log(apples(input))
