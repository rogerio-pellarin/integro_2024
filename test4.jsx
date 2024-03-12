import { Component } from "react";
import axios from "axios";

export default class Palindrome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPalindrome: false,
      text: "",
    };
  }

  handleInput(e) {
    const { value } = e.target;

    this.setState({ text: value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  async checkPalindrome() {
    const { text } = this.state;
    const cleanedText = text.replace(/[^A-Za-z]/g, "").toLowerCase();
    const reversedText = cleanedText.split("").reverse().join("");
    const isPalindrome = cleanedText === reversedText;

    this.setState({ isPalindrome });

    if (isPalindrome) {
      await axios
        .post(
          "http://localhost:3000/products",
          {
            id: 4,
            name: "Bananas",
            price: 0.99,
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  }

  render() {
    return (
      <main>
        <h1>Palindrome Checker</h1>
        <form onChange={this.handleSubmit}>
          <input
            type="text"
            onChange={(e) => this.handleInput(e)}
            value={this.state.text}
            required
          />
          <button type="submit">Check</button>
        </form>
      </main>
    );
  }
}
