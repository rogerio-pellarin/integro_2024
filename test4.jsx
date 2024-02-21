import React,  { useState } from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {

    const [inputText, setInputText] = useState('');
    const [isPalindrome, setIsPalindrome] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleCheckPalindrome = () => {
        setLoading(true);
        axios.post('/api/check-palindrome', { expression: inputText })
            .then(response => {
                setIsPalindrome(response.data.isPalindrome);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
            });
    };

    render() {
        return (
            <div>
                <input type="text" value={inputText} onChange={handleInputChange} />
                <button onClick={handleCheckPalindrome} disabled={loading}>
                    Check Palindrome
                </button>
                {loading && <p>Loading...</p>}
                {isPalindrome !== null && (
                    <p>
                        The entered text <strong>{inputText}</strong> {isPalindrome ? 'is' : 'is not'} a palindrome.
                    </p>
                )}
            </div>
        )
    }
}