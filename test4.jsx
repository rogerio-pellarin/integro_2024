import React, { useState } from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {

    const [inputText, setInputText] = useState('');
    const [resultado, setResultado] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    // const api = "https://dummy.restapiexample.com/api/v1/employees";
    const api = '/api/validar_palindromo';

    const validarPalindromo = () => {
        axios.post(api, { texto: inputText })
        .then(response => {
            // console.log(response)
            // !NOTE: Aqui se validaria el resultado de la respuesta del servicio web, se uso uno de prueba para testear el correcto funcionamiento del axios
            setResultado(response.data ? "Es Palindromo" : "No es palinfromo");
        })
        .catch(error => {
            console.error('Error al realizar la solicitud:', error);
        });
    };

    render() {
        return (
            <div>
                <h2>Validador de Palíndromos</h2>
                <input type="text" value={inputText} onChange={handleInputChange} />
                <button onClick={validarPalindromo}>Validar</button>
                {resultado && <p>{resultado}</p>}
            </div>
        )
    }
}