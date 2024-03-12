<?php

function is_palindrome($text) {

	// If the text has fewer than two characters, it cannot be checked
	if (strlen($text) < 2) {
		return false;
	}

	// Replace or remove some characters so they do not interfere with the string validation
	$text = str_replace([" ", ",", "."], "", $text);

	// Update the text to lowercase
	$text = strtolower($text);

	// I iterate through the text string comparing each letter with the corresponding position
	for ($i = 0; $i < strlen($text); $i++) {
		if ($text[$i] != $text[strlen($text)-$i-1]) {
			return false;
		}
	}

	return true;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";

var_dump(is_palindrome($input));