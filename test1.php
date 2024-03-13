<?php

function is_palindrome($input) {
    //solve this method that says if the sentence is palindrome or not

    // separate phrase accent on a separate character
    $nonAccentsPhrase = iconv("UTF-8", 'ASCII//TRANSLIT', $input);

    // remove all non alpha numeric characters and convert the phrase to lowercase
    $lowerCasePhrase = preg_replace("/[^A-Za-z0-9]/", "", strtolower($nonAccentsPhrase));
    
    // Use strrev to get the reverse string and compare if they are equal and check if length is > 0
    if ($lowerCasePhrase == strrev($lowerCasePhrase) && strlen($lowerCasePhrase) != 0) {
        return true; // is a palindrome
    }

    // is not a palindrome or the phrase only contains non-alphanumeric symbols
    return false; // is not a palindrome
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar ".
         "boina me dejara, pese a odiar toda tropa por tal ropilla";

var_dump(is_palindrome($input));
