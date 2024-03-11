<?php

function is_palindrome($input) {
    //Elimino primero las tíldes del input, pero conservando la letra
     $input = iconv('UTF-8', 'ASCII//TRANSLIT', $input);
     //Ejecuto expresión regular para eliminar comas, espacios, caracteres especiales, y por fuera la función para normalizar al minúsculas todo el texto ingresado. 
     $input = strtolower(preg_replace('/[^a-zA-Z0-9]/', '', $input));
     //revierto el string y almaceno en variable.
     $fraseInvertida = strrev($input);
     //Aquí hago la comparación de ambos textos en el return y este devuelve false o true.
     return $input === $fraseInvertida;
}

$input = "Allí por la tropa portado, traido a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));