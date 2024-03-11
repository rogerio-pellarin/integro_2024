<?php

function is_palindrome($input) {
    $input = iconv('UTF-8', 'ASCII//TRANSLIT', $input);
    $newString = strtolower(preg_replace('/[^a-zA-Z]/', '', $input));
    $reversed = strtolower(strrev($newString));
    printf(''. $newString .' '. $reversed .' ');
    return $newString == $reversed;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));