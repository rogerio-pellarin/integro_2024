<?php

function is_palindrome($input) : bool
{
    $result = false;
    
    $inputRevert = strrev($input);
    if (strcmp($inputRevert, $input) == 0) {
        $result = true;
    }

    return $result;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));