// export default class Palindrome extends React.Component {

//     render() {
//         return (
//             <>
//             </>
//         )
//     }
// }

import React, { useState } from "react";
import axios from "axios";

function PalindromeChecker() {
  const [inputText, setInputText] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const checkPalindrome = async () => {
    try {
      const response = await axios.post("/api/checkPalindrome", {
        text: inputText,
      });
      setIsPalindrome(response.data.isPalindrome);
    } catch (error) {
      console.error("Error checking palindrome:", error);
    }
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={checkPalindrome}>Check Palindrome</button>
      {isPalindrome !== null && (
        <p>
          {isPalindrome ? "It is a palindrome!" : "It is not a palindrome!"}
        </p>
      )}
    </div>
  );
}

export default PalindromeChecker;
