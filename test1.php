<?php

function is_palindrome($input) {
    //solve this method that says if the sentence is palindrome or not
    $response = 'NO es palindrome';

    if( empty($input) )
    {
        $response = '¡No hay información para analizar!';
    }
    else 
    {

        //Se eliminan los caracteres especiales y se convierte en minúscula el texto.
        $special_characters = array (' ', '.', ';', ',', ':', '-', '¡', '!', '¿', '?', '/');
        $input = trim(strtolower($input));
        $input = str_replace($special_characters, "", $input);

        if ( !empty($input) )
        {

            //Tildes
            $with_accent = array ('á', 'é', 'í', 'ó', 'ú');
            $without_accent = array ('a', 'e', 'i', 'o', 'u');
            $input = str_replace($with_accent, $without_accent, $input);

            //Se convierte el texto en array y se invierte el array para compararlos.
            $array_input = str_split($input);
            $array_inverted = array_reverse($array_input);
            $result = array_diff_assoc($array_input, $array_inverted);

            if( empty($result) )
            {
                $response = '¡Es palindrome!';
            }

        }
        else 
        {
            $response = '¡No hay información para analizar!';
        }

    }

    return $response;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));