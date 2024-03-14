import React from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {
    state = {
        text: '',
        isPalindrome: null,
        loading: false,
        error: '',
        lastCheckedText: ''
    };

    checkPalindrome = async () => {
        const { text } = this.state;
        this.setState({ loading: true, error: '', lastCheckedText: text });
        try {
            const response = await axios.post('http://localhost:8000/test1api.php', { text });
            this.setState({ isPalindrome: response.data.isPalindrome });
        } catch (error) {
            this.setState({ error: 'Error al verificar el palíndromo. Intente de nuevo.', isPalindrome: null });
        } finally {
            this.setState({ loading: false, text: '' });
        }
    };

    render() {
        const { text, isPalindrome, loading, error, lastCheckedText } = this.state;

        return (
            <div className="palindrome-checker">
                <input 
                    type="text" 
                    value={text} 
                    onChange={(e) => this.setState({text: e.target.value})} 
                    placeholder="Ingresa un texto"
                    disabled={loading}
                />
                <button onClick={this.checkPalindrome} disabled={loading || text === ''}>
                    {loading ? 'Verificando...' : 'Verificar Palíndromo'}
                </button>
                {error && <div className="error">{error}</div>}
                {isPalindrome !== null && (
                    <p className={isPalindrome ? 'positive' : 'negative'}>
                        {`La palabra "${lastCheckedText}" ${isPalindrome ? 'es un palíndromo' : 'no es un palíndromo'}.`}
                    </p>
                )}
            </div>
        );
    }
}
