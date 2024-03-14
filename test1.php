<?php

function is_palindrome($input) {
    //solve this method that says if the sentence is palindrome or not

    // Convertir el input a minúsculas y eliminar los espacios
    $input = strtolower(str_replace(' ', '', $input));
    
    // Obtener la longitud del input
    $longitud = strlen($input);
    
    // Iterar sobre la mitad del input para verificar si es un palíndromo
    for ($i = 0; $i < $longitud / 2; $i++) {
        // Comparar el carácter actual con su contraparte en la otra mitad
        if ($input[$i] !== $input[$longitud - $i - 1]) {
            // Si no coinciden, la input no es un palíndromo
            return false;
        }
    }
    
    // Si todas las comparaciones fueron exitosas, la input es un palíndromo
    return true;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));