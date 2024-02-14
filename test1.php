<?php


if (!function_exists('formatToCheckPalindrome')) {
    /**
     * format the text to correctly validate if it is a
     * palindrome phrase
     * 
     * @param string $input
     * @return string
     */
    function formatToCheckPalindrome(string $input): string
    {
        //parse to lower case 
        $input = mb_strtolower($input, 'UTF-8');
        //remove accents with Normalize
        $input = Normalizer::normalize($input, Normalizer::NFD);
        $input = preg_replace('/[\x{0300}-\x{036F}]/u', '', $input);
        //\W remove all non alphanumeric characters
        $input = preg_replace('/[\W]/', '', $input);
        return $input;
    }
}

if (!function_exists(('checkWithLoop'))) {
    /**
     * Validate palindrome with a loop
     *
     * @param string $input
     * @return boolean
     */
    function checkPalindromeWithLoop(string $input): bool
    {
        $result = true;
        //total sentence length
        $inputLength = strlen($input);

        //Half is traversed as long as the characters in each 
        //part match, the FOR loop must continue
        for ($i = 0; $i < ($inputLength / 2); $i++) {
            //If the characters no longer match it will not be a palindrome.
            if ($input[$i] !== $input[$inputLength - 1 - $i]) {
                $result = false;
                break;
            }
        }

        return $result;
    }
}

if (!function_exists(('checkPalindromeWithArray'))) {
    /**
     * Validate palindrome with an array
     *
     * @param string $input
     * @return boolean
     */
    function checkPalindromeWithArray(string $input): bool
    {
        //divide string and reorder reverse
        $reverseArray = array_reverse(str_split($input));    
        //join string 
        $reverseInput = implode("", $reverseArray);

        return $reverseInput === $input;
    }
}

if (!function_exists('isPalindrome')) {

    /**
     * Validate if a text is a palindrome
     *
     * @param string $input
     * @return boolean
     */
    function isPalindrome(string $input): bool
    {
        $input = formatToCheckPalindrome($input);

        //with loop
        // return checkPalindromeWithLoop($input);
        //with array
        return checkPalindromeWithArray($input);
    }
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(isPalindrome($input));
