<?php

function is_palindrome($input) {
    //solve this method that says if the sentence is palindrome or not
    $search = explode(",","á,é,í,ó,ú");
    $replace = explode(",","a,e,i,o,u");
    $input= str_replace($search, $replace, $input);
    
    
    $input = str_replace(",", "", $input);
    $words = explode(" ", strtolower($input));
    $phrase = "";

    foreach ($words as $word) {
        $phrase.= trim($word);
    }

    if($phrase == strrev($phrase)){
        return 'is palindrome';
    }else{
        return 'not palindrome';
    }
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));
