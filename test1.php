<?php

function is_palindrome($input) {
    // Convertir la cadena a minúsculas y eliminar caracteres no alfanuméricos
    $input = preg_replace("/[^A-Za-z0-9]/", '', strtolower($input));
    // Comparar la cadena original con su reverso
    return $input == strrev($input);
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));