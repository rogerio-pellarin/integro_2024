import axios from "axios";
import { React, useState } from "react";

export const App = () => {
  const [inputText, setInputText] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(null);

  const handleInputChange = ({ target }) => {
    setInputText(target.value);
  };

  const handleCheckPalindrome = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost/integroServer/server.php",
        {
          text: inputText,
        }
      );

      setIsPalindrome(data.isPalindrome);
    } catch (error) {
      console.error("Error checking palindrome:", error);
    }
  };

  return (
    <div>
      <h1>Palindrome App</h1>
      <div>
        <label htmlFor="inputText">Enter text:</label>
        <input
          type="text"
          id="inputText"
          value={inputText}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleCheckPalindrome}>Check Palindrome</button>
      {isPalindrome !== null && (
        <div>
          {isPalindrome ? (
            <p>The entered text is a palindrome!</p>
          ) : (
            <p>The entered text is not a palindrome.</p>
          )}
        </div>
      )}
    </div>
  );
};