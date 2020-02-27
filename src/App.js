import React, { Component } from 'react';
import './App.css';
import Quiz from "./components/QuizCard/Quiz.js";
import Menu from "./components/MenuCard/Menu.js";
import Settings from "./components/SettingsCard/Settings.js";
import Logo from "./img/logo.png";
import test from "./test.json";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
	constructor(props) {
		super(props);

		let seq = [];

		for (var i = 0; i < 5; i++) {
			seq.push(i);
		}

		this.handleShuffle(seq);

		this.state = {
			recipe: test, // recipes
			checked: false, // setting
			current: "/", // back button
			sequence: seq, // order
			index: 0
		}


		this.handleChange = this.handleChange.bind(this);
		this.handleCurrent = this.handleCurrent.bind(this);
		this.handleShuffle = this.handleShuffle.bind(this);
		this.shuffle = this.shuffle.bind(this);
	}

	// RANDOM SUGAR LEVEL CHECK
	handleChange(checked) {
        this.setState({
            checked
        });
	}

	// HANDLES THE BACK BUTTON
	handleCurrent(url) {
		this.setState({
			current: url
		})
	}

	handleShuffle(seq) {
		let newSequence = seq;
		console.log("current: " + newSequence);
		var current = newSequence.length;
		var temp;
		var random;

		while (0 !== current) {
			random = Math.floor(Math.random() * current);
			current -= 1;

			temp = newSequence[current];
			newSequence[current] = newSequence[random];
			newSequence[random] = temp;
		}

		console.log("new: " + newSequence);
	}

	shuffle() {
		this.handleShuffle(this.state.sequence);
		console.log("Q: " + this.state.sequence);
	}

	render() {
		return (
			<>
				<main>
					<BrowserRouter>
						<Switch>
							<Route exact path="/" render={(props) => <Menu handleCurrent={this.handleCurrent} /* back button change current */ />} />
							<Route exact path="/quiz" render={(props) => <Quiz recipe={this.state.recipe} index={this.state.sequence[this.state.index]} shuffle={this.shuffle} />} />
							<Route exact path="/settings" render={(props) => <Settings 
								change={this.handleChange} // setting button
								checked={this.state.checked} // setting check
								current={this.state.current} />} /* back button url */ 
							/>
							<Redirect to="/" />
						</Switch>
					</BrowserRouter>
					<img src={Logo} alt="logo" className="logo" />
				</main>
			</>
		);
	}
}

export default App;
