<?php

function is_palindrome($input) {
    //solve this method that says if the sentence is palindrome or not
    $accented_characters = array('á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú');
    $unaccented_characters = array('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U');
    $cleaned_phrase = str_replace($accented_characters, $unaccented_characters, $input);

    
    $cleaned_phrase = strtolower(preg_replace("/[^A-Za-z0-9]/", '', $cleaned_phrase));   
    
    $reversed_phrase = strrev($cleaned_phrase);
    
    if ($cleaned_phrase == $reversed_phrase) {
        return true;
    } else {
        return false;
    }
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));