<?php

function is_palindrome($input) {
    $words = explode(' ', $input);
    $rever_words = array_reverse($words);
    $reversed_expression = implode(' ', $rever_words);
    return $input === $rev_expression;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));
