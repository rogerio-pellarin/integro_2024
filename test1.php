<?php

function is_palindrome($input)
{
    $input = iconv("utf-8", "ascii//TRANSLIT", $input);
    $input = strtolower(preg_replace('/[^a-zA-Z0-9]/', '', $input));
    $newinput = strrev($input);
    return $input === $newinput;
}

$input = "Allí por la tropa portado, traído a ese paraje de 
maniobras, una tipa como capitán usar boina me dejara, pese a 
odiar toda tropa por tal ropilla";

if (is_palindrome($input)) {
    echo "True, es Palindrome";
} else {
    echo "False, No es Palindrome";
}