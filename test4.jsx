import React from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {
    const [inputText, setInputText] = useState(''); //Capturo el estado del campo del texto
    const [result, setResult] = useState(''); //Seteo el valor a la variable resutl

    //Creo el manejador de eventos capturo el valor del campo donde se ingresa el texto a evaluar con el evento onChange
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = () => {
        // Realizar una llamada POST a la API para validar el palíndromo, que se creo con anterioridad y envío como paramentro el inputText
        axios.post('http://localhost:3000/api/test1', { text: inputText })
            .then(response => {
                setResult(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    //Aqui renderizo html
    render() {
        return (
            <div>
                <h1>Validador de Palíndromos</h1>
                <input type="text" value={inputText} onChange={handleInputChange} />
                <button onClick={handleSubmit}>Validar Palíndromo</button>
                {result && <p>{result}</p>}
            </div>
        )
    }
}