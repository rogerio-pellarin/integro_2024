<?php

function is_palindrome($input) {
    //Primeramente, normalizar el input, removiendo símbolos, espacios, etc.
    $normalized = strtolower(preg_replace("/[^a-zA-Z0-9]/", "", $input));
		
	//Utilizar strrev para revertir el texto ya normalizado, lo cual permite comprobar si es palíndromo.
	return strrev($normalized) === $normalized;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));