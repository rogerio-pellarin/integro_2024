import React from "react";
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

  handleCheckPalindrome = () => {
    if (!this.state.inputText.trim()) {
      alert("Por favor ingrese un texto");
      return;
    }

    axios
      .post(`http://localhost:5001/api/palindrome/${this.state.inputText}`, {})
      .then((response) => {
        this.setState({ isPalindrome: response.data.message });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleCheckPalindrome}>Check Palindrome</button>
        {this.state.isPalindrome !== null && (
          <p>
            La frase "{this.state.inputText}"
            {this.state.isPalindrome ? " es palíndroma" : " no es palíndroma"}
          </p>
        )}
      </div>
    );
  }
}
