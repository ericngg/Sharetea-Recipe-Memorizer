import React, { Component } from 'react';
import './App.css';
import Quiz from "./components/Quiz.js";
import test from "./test.json";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recipe: test
		}
	}

	render() {
		return (
			<Quiz recipe={this.state.recipe}/>
		);
	}
}

export default App;
