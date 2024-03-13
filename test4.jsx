import React, { useState } from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ispalindrome: "",
      result: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ispalindrome: this.state.ispalindrome,
    };
    axios
      .post("http://localhost:3000/ispalindrome", data)
      .then((res) => {
        this.setState({ result: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (e) => {
    this.setState({ ispalindrome: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> is Palindrome:
            <input
              type="text"
              value={this.state.ispalindrome}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Button</button>
        </form>
        <p>{this.state.result}</p>
      </div>
    );
  }
}