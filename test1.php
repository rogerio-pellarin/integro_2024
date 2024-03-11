<?php

function is_palindrome($input) {
    //solve this method that says if the sentence is palindrome or not
    // Step 1: Remove non-alphanumeric characters and convert to lowercase
    $cleaned_input = preg_replace('/[^a-z0-9]/i', '', strtolower($input));

    // Step 2: Compare the original string with its reversed version
    $reversed_input = strrev($cleaned_input);
    
    // Step 3: Check if the original string is equal to its reversed version
    return $cleaned_input === $reversed_input;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));