import React, { Component } from 'react';
import './quiz.css';
import Questions from "./Questions";

class Quiz extends Component {

	render() {
		return (
			<div className="container">
				<Questions recipe={this.props.recipe[this.props.index]} />
			</ div>
		);
	}
}

export default Quiz;
