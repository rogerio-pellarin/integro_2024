import React from "react";
import axios from "axios";

export default class Palindrome extends React.Component {
  state = {
    input: "",
    verificate: false,
    error: "",
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost/integro_2024/test1.php",
        this.state.input
      );
      this.setState({ verificate: response.data.is_palindrome, error: "" });
    } catch (error) {
      this.setState({ error: "Error al realizar la solicitud" });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
            placeholder="Ingrese un texto palíndromo"
          />
          <button type="submit">Verificar Palíndromo</button>
        </form>
        {this.state.verificate && <p>El texto es un palíndromo</p>}
        {!this.state.verificate && <p>El texto no es un palíndromo</p>}
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}
