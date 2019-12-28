import React, { Component } from 'react';
import './quiz.css';
import Questions from "./Questions";

class Quiz extends Component {

	render() {
		return (
			<div className="container">
				<Questions recipe={this.props.recipe[0]} />
			</ div>
		);
	}
}

export default Quiz;
