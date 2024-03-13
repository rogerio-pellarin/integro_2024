import React from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {
    state = {
        text: '',
        isPalindrome: null
    };

    checkPalindrome = async () => {
        try {
            const response = await axios.post('/api/check-palindrome', { text: this.state.text });
            // Assuming the API returns a JSON object with a boolean property "isPalindrome"
            this.setState({ isPalindrome: response.data.isPalindrome });
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    handleTextChange = (event) => {
        this.setState({ text: event.target.value });
    };

    render() {
        return (
            <>
                <input type="text" value={this.state.text} onChange={this.handleTextChange} placeholder="Enter text" />
                <button onClick={this.checkPalindrome}>Check Palindrome</button>
                {this.state.isPalindrome !== null && (
                    <p>{this.state.text} is {this.state.isPalindrome ? '' : 'not'} a palindrome.</p>
                )}
            </>
        );
    }
}
