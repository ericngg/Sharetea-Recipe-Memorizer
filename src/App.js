import React, { Component } from 'react';
import './App.css';
import Quiz from "./components/QuizCard/Quiz.js";
import Menu from "./components/MenuCard/Menu.js";
import Settings from "./components/SettingsCard/Settings.js";
import Logo from "./img/logo.png";
import test from "./test.json";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recipe: test, // recipes
			checked: false, // setting
			current: "/", // back button
			shuffle: false,
		}


		this.handleChange = this.handleChange.bind(this);
		this.handleCurrent = this.handleCurrent.bind(this);
		this.handleShuffleChange = this.handleShuffleChange.bind(this);
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

	handleShuffleChange(shuffle) {
        this.setState({
            shuffle
        });
	}

	render() {
		return (
			<>
				<main>
					<BrowserRouter>
						<Switch>
							<Route exact path="/" render={(props) => <Menu handleCurrent={this.handleCurrent} /* back button change current */ />} />
							<Route exact path="/quiz" render={(props) => <Quiz 
								recipe={this.state.recipe} 
								shuffle={this.state.shuffle} />} 
							/>
							<Route exact path="/settings" render={(props) => <Settings 
								change={this.handleChange} // setting button
								checked={this.state.checked} // setting check
								shuffle={this.state.shuffle} // shuffle boolean
								shuffleChange={this.handleShuffleChange} // shuffle change
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
