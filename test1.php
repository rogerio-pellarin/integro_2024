<?php

function is_palindrome($input) {
    // Remove non-alphanumeric characters and convert to lowercase
    $normalized = strtolower(preg_replace('/[^A-Za-z0-9]/', '', $input));
    // Check if the normalized string is equal to its reverse
    return $normalized === strrev($normalized);
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));
?>
