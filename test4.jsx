import React from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: '',
            result: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({ textInput: event.target.value });
    }

    handleSubmit = async () => {
        try {
            const response = await axios.post('./test1.php', {
                text: this.state.textInput
            });
            const isPalindrome = response.data.isPalindrome;
            const result = isPalindrome ? 'Es un palíndromo' : 'No es un palíndromo';
            this.setState({ result });
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    }

    render() {
        return (
            <div className="test4Class">
                <input placeholder="Escribe aquí" type="text" value={this.state.textInput} onChange={this.handleInputChange} />
                <button onClick={this.handleSubmit}>Validar Palíndromo</button>
                {this.state.result && <p>{this.state.result}</p>}
            </div>
        );
    }
}


//Explicacion del codigo 

/**
 * Componente Palindrome
 * Este componente permite al usuario ingresar un texto y validar si es un palíndromo o no.
 * Utiliza Axios para realizar una solicitud POST a una API REST que realiza la validación.
 * El resultado de la validación se muestra al usuario en la interfaz.
 */