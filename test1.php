<?php

function is_palindrome($input) {
    $input = strtolower(preg_replace("/[^a-z0-9áéíóúñ\s]+/i", "", $input));


    $words = explode(' ', $input);


    $reversed_words = array_reverse($words);


    $reversed_expression = implode(' ', $reversed_words);

    
    return $input === $reversed_expression;
}

$input = "ablewasIereIsawelba";
var_dump(is_palindrome($input));
