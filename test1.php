<?php

function is_palindrome($input) {
    // convertir la expresión a minúscula y eliminar espacios y signos gramaticales como la puntuación
    $clean_input = strtolower(preg_replace('/[^a-zA-Z0-9]/', '', $input));

    // Comparar expresión original con su reverso
    return $clean_input === strrev($clean_input);
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));

// EXPLICACION DE EL CODIGO
/*
 Utilice la función is_palindrome() para que tome una cadena como entrada y devuelva un true
si es un palíndromo y false si no lo es 
*/
