<?php

function is_palindrome($input) {
    //remove spaces, comma and dots
    $input = str_replace(' ', '', $input);    
    $input = str_replace(',', '', $input);    
    $input = str_replace('.', '', $input);    

    // remove accents
    $accents_replace = array(
        "á" => "a",
        "é" => "e",
        "í" => "i",
        "ó" => "o",
        "ú" => "u",
        "ñ" => "n",
        "Á" => "A",
        "É" => "E",
        "Í" => "I",
        "Ó" => "O",
        "Ú" => "U",
        "Ñ" => "N",
      );

    $input = strtr($input, $accents_replace);
   
    // standarization input
    $input = strtoupper($input);
    // Revert input
    $revertedInput = strrev($input);

    return $input == $revertedInput;

}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";

var_dump(is_palindrome($input));