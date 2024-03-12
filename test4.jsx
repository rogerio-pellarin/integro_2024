import React from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            isPalindrome: false,
            error: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    handleSubmit(event) {
        axios.post('/api/is_palindrome', { input: this.state.inputValue })
            .then(response => {
                if (response.data.is_palindrome) {
                    this.setState({ isPalindrome: true, error: null });
                } else {
                    this.setState({ isPalindrome: false, error: 'No es palindrome' });
                }
            })
            .catch(error => {
                this.setState({ error: error.toString() });
            });

        event.preventDefault();
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Ingrese la Palabra
                        <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Validar Palabra" />
                </form>
                {this.state.isPalindrome && <p>la Palabra es palindrome</p>}
                {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
            </>
        );
    }
}