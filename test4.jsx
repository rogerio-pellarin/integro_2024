import React from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {

	request = async () => {
		const url = '../test1.php';
        const response = await axios.post( url, {
            input: input,
        });
    }

    render() {
        return (
            <>
                <input type="text" name="input"/>
                <input type="button" value="" onClick={ this.request }/>
            </>
        )
    }
}