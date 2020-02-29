import React, { Component } from 'react';
import './quiz.css';
import Questions from "./Questions";

class Quiz extends Component {

	render() {
		return (
			<div className="container">
				<Questions recipe={this.props.recipe} shuffle={this.props.shuffle} initial={this.props.initial} />
			</div>
		);
	}
}

export default Quiz;
