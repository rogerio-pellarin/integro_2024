<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

function is_palindrome($input) {
    $input = strtolower($input);
    $input = preg_replace("/[^a-z0-9]/i", "", $input);
    return $input === strrev($input);
}

// Asegura que solo aceptas solicitudes POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Decodifica el JSON enviado desde React
    $data = json_decode(file_get_contents('php://input'), true);
    $input = $data['text']; // Asume que el texto enviado está bajo la clave 'text'
    $isPalindrome = is_palindrome($input);

    // Devuelve si es palíndromo o no en formato JSON
    echo json_encode(["isPalindrome" => $isPalindrome]);
} else {
    // Método no permitido
    echo json_encode(["error" => "Only POST method is accepted"]);
}