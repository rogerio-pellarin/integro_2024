import React from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {

    getData = async () => {
        const resPal = await axios.post( 'http://localhost:8080/jobs-tests/integro_2024/test1.php', {
            frase: frase,
        });

        console.log('resPal:', resPal);
    }

    render() {
        return (
            <>
                <input type="text" name="frase" id="" />
                <br />
                <input type="button" value="" onClick={ this.getData }/>
            </>
        )
    }
}