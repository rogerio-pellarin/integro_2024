import React, { useState } from "react";
import axios from "axios";

export default class Palindrome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      isPalindrome: null,
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  handlePalindrome = () => {
    axios
      .post("URL_TO_REST_API", { text: this.state.inputText })
      .then((response) => {
        this.setState({ isPalindrome: response.data.isPalindrome });
      })
      .catch((error) => {
        console.error("Error checking palindrome:", error);
      });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={inputText}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handlePalindrome}>Check if Palindrome</button>
        {isPalindrome !== null && (
          <p>
            {isPalindrome
              ? "The entered text is a palindrome!"
              : "The entered text is not a palindrome."}
          </p>
        )}
      </div>
    );
  }
}
