<?php

header('Content-Type: application/json');

function is_palindrome($input)
{
    //solve this method that says if the sentence is palindrome or not

    $input = mb_strtolower(str_replace(
        array('Á', 'É', 'Í', 'Ó', 'Ú', 'á', 'é', 'í', 'ó', 'ú'),
        array('A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'),
        $input
    ));

    $input = preg_replace('/[^a-z]/', '', $input);

    return $input === strrev($input);
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
// $input = "Ar ti no, bonita";
// $input="Adán no cede cron Eva y Yavé no cede con nada";
var_dump(is_palindrome($input));

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $result = is_palindrome($input);
    echo json_encode(['is_palindrome' => $result]);
    exit();
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit();
}
