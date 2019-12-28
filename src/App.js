import React, { Component } from 'react';
import './App.css';
import Quiz from "./components/QuizCard/Quiz.js";
import Menu from "./components/MenuCard/Menu.js";
import Logo from "./img/logo.png";
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
			<>

				<Menu />
				{/* } <Quiz recipe={this.state.recipe} /> { */}
				<img src={Logo} alt ="logo" className="logo" />
			</>
		);
	}
}

export default App;
