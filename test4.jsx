import React from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {
    handleChange = event => {
        this.setState({ text: event.target.value });
    }
    
    handleSubmit = event => {
        event.preventDefault();
    
        axios.post('http://localhost/test1.php', { text: this.state.text })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Texto:</label>
                    <input type="text" name="text" onChange={this.handleChange} />
                    <button type="submit">Validar</button>
                </form>
            </div>
        );
    }
}