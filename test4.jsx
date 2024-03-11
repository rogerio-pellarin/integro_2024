import React from 'react';
import axios from 'axios';

class Palindrome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            isPalindrome: null,
        };
    }

    checkPalindrome = async () => {
        try {
            const response = await axios.post('./test1.php', { text: this.state.inputText });
            this.setState({ isPalindrome: response.data.isPalindrome });
        } catch (error) {
            console.error('Error checking palindrome:', error);
        }
    };

    render() {
            return (
                <div>
                    <h1>Palindrome Checker</h1>
                    <input
                        type="text"
                        value={this.state.inputText}
                        onChange={(e) => this.setState({ inputText: e.target.value })}
                        placeholder="Enter text..."
                    />
                    <button onClick={this.checkPalindrome}>Check</button>
                    {this.state.isPalindrome !== null && (
                        <p>{this.state.isPalindrome ? 'It is a palindrome 😄!' : 'It is Not a palindrome 😔.'}</p>
                    )}
                </div>
            );
    }
}

export default Palindrome;