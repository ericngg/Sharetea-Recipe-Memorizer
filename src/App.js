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
		
		console.log(seq);

		this.handleShuffle(seq);

		console.log(seq);

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
		var current = seq.length;
		var temp;
		var random;

		while (0 !== current) {
			random = Math.floor(Math.random() * current);
			current -= 1;

			temp = seq[current];
			seq[current] = seq[random];
			seq[random] = temp;
		}
	}

	render() {
		return (
			<>
				<main>
					<BrowserRouter>
						<Switch>
							<Route exact path="/" render={(props) => <Menu handleCurrent={this.handleCurrent} /* back button change current */ />} />
							<Route exact path="/quiz" render={(props) => <Quiz recipe={this.state.recipe} index={this.state.sequence[this.state.index]} />} />
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
