<?php

function is_palindrome($input) {
    //solve this method that says if the sentence is palindrome or not
    try {
        if(!is_string($input)) {
            throw new Error("Invalid input, must be a string type");
        }
    
        $characters = [',', ' ', '\''];
    
        // becoming sentence to lowercase and removing it accents
        $input_formated = strtolower(iconv('UTF-8', 'ASCII//TRANSLIT', $input));
    
        // Removing characters that are not needed for validation like palindrome
        for ($i = 0; $i < count($characters); $i++) {
            $input_formated = strtr($input_formated, array($characters[$i] => ''));
        }
    
        return $input_formated === strrev($input_formated);
    } catch (Error $e) {
        echo $e->getMessage();
    }
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));