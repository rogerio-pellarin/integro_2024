import React from "react";
import axios from "axios";

// Define a class component named Palindrome
export default class Palindrome extends React.Component {
    constructor(props) {
        super(props);
        // Initialize the component state with inputText and isPalindrome
        this.state = {
            inputText: "",
            isPalindrome: null,
        };
    }

    // Event handler for input field change
    handleInputChange = (event) => {
        // Update inputText state with the value of the input field
        this.setState({ inputText: event.target.value });
    };

    // Check if the input text is a palindrome
    checkPalindrome = () => {
        // Make a POST request to the backend API (/test1.php) with the input text
        axios
            .post("/test1.php", { palindrome: this.state.inputText })
            .then((response) => {
                // Upon receiving a response, update isPalindrome state based on the result
                this.setState({ isPalindrome: response.data.isPalindrome });
            })
            .catch((error) => {
                console.error("Error checking palindrome:", error);
            });
    };

    // Render method to display the input field, button, and result
    render() {
        return (
            <div>
                {/* Input field to enter phrase */}
                <input
                    type="text"
                    value={this.state.inputText}
                    onChange={this.handleInputChange}
                    placeholder="Enter text"
                />
                {/* Button to trigger palindrome check */}
                <button onClick={this.checkPalindrome}>Check Palindrome</button>
                {/* Display result based on the value of isPalindrome */}
                {this.state.isPalindrome !== null && (
                    <div>
                        {/* Conditional rendering of result message */}
                        {this.state.isPalindrome
                            ? "It is a palindrome!"
                            : "It is not a palindrome."}
                    </div>
                )}
            </div>
        );
    }
}
