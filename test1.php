<?php

function is_palindrome($input) {
    $input = strtolower($input);
    $input = preg_replace("/[^a-z0-9]/i", "", $input);
    return $input === strrev($input);

}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));