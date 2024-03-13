<?php
function is_palindrome($input) {
    $cleaned_input = preg_replace('/[^a-z]/i', '', strtolower($input));
    return $cleaned_input === strrev($cleaned_input);
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));