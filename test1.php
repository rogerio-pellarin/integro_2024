<?php

function is_palindrome($input) {
    //solve this method that says if the sentence is palindrome or not
      // Remove non-alphanumeric characters and convert to lowercase
      $cleaned_expression = strtolower(preg_replace("/[^A-Za-z0-9]/", '', $input));
    
      // Reverse the cleaned expression
      $reversed_expression = strrev($cleaned_expression);
      
      // Check if the original and reversed expressions are the same
      return $cleaned_expression === $reversed_expression;
}

//$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
//$input = "A man, a plan, a canal, Panama!";
var_dump(is_palindrome($input));