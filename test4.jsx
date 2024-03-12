import React from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {

	state = {
		text: "",
		response: "",
	};

	handleChange = (e) => {
		this.setState({ text: e.target.value });
	};

	isPalindrome = (e) => {
		e.preventDefault();

		axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
			this.setState({ response: res.data ? "Sí" : "No" });
		}).catch((e) => {
			this.setState({ response: e.message });
		});
	};

	render() {
		return (
			<>
				<form onSubmit={this.isPalindrome}>
					<input
						type="text"
						value={this.state.text}
						onChange={this.handleChange}
					/>

					<input type="submit" value="Is palindrome ?" />
				</form>

				<h2>Is palindrome = {this.state.response}</h2>
			</>
		);
	}
}